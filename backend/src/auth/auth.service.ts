import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserRole } from "../users/entities/user.entity";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "../users/users.service";
import { User } from "../users/entities/user.entity";
import * as bcrypt from "bcrypt";
import * as nodemailer from "nodemailer";
import { randomBytes } from "crypto";

@Injectable()
export class AuthService {
  private transporter: nodemailer.Transporter;
  // In-memory OTP storage (for demo - use database in production)
  private otpStorage: Map<string, { otp: string; expiresAt: Date }> = new Map();

  // Security: Track failed login attempts
  private failedAttempts: Map<
    string,
    { count: number; lockedUntil: Date | null }
  > = new Map();
  private readonly MAX_FAILED_ATTEMPTS = 5;
  private readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

  // Check if account is locked due to failed attempts
  private checkFailedAttempts(email: string): void {
    const attempts = this.failedAttempts.get(email);
    if (attempts && attempts.lockedUntil && new Date() < attempts.lockedUntil) {
      const remainingMinutes = Math.ceil(
        (attempts.lockedUntil.getTime() - Date.now()) / 60000,
      );
      throw new UnauthorizedException(
        `Account temporarily locked. Try again in ${remainingMinutes} minutes`,
      );
    }
    // Clear expired lockout
    if (
      attempts &&
      attempts.lockedUntil &&
      new Date() >= attempts.lockedUntil
    ) {
      this.failedAttempts.delete(email);
    }
  }

  // Record failed login attempt
  private recordFailedAttempt(email: string): void {
    const attempts = this.failedAttempts.get(email) || {
      count: 0,
      lockedUntil: null,
    };
    attempts.count += 1;

    if (attempts.count >= this.MAX_FAILED_ATTEMPTS) {
      attempts.lockedUntil = new Date(Date.now() + this.LOCKOUT_DURATION);
      console.log(
        `🔒 Account locked for ${this.LOCKOUT_DURATION / 60000} minutes due to failed attempts`,
      );
    }

    this.failedAttempts.set(email, attempts);
    console.log(
      `⚠️ Failed login attempt ${attempts.count}/${this.MAX_FAILED_ATTEMPTS} for ${email}`,
    );
  }

  // Clear failed attempts on successful login
  private clearFailedAttempts(email: string): void {
    this.failedAttempts.delete(email);
  }

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    // Initialize email transporter
    this.transporter = nodemailer.createTransport({
      host: this.configService.get("EMAIL_HOST"),
      port: this.configService.get("EMAIL_PORT"),
      secure: false,
      auth: {
        user: this.configService.get("EMAIL_USER"),
        pass: this.configService.get("EMAIL_PASS"),
      },
    });
  }

  // Generate a 6-digit OTP
  private generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Send OTP via email
  private async sendOTPEmail(email: string, otp: string): Promise<void> {
    const emailUser = this.configService.get("EMAIL_USER");
    const emailPass = this.configService.get("EMAIL_PASS");

    // Check if email is configured (not placeholder)
    if (!emailUser || !emailPass || emailPass === "your-app-password") {
      // Development fallback: log OTP to console
      console.log("\n========================================");
      console.log("🔐 OTP for", email, ":", otp);
      console.log("========================================\n");
      return;
    }

    try {
      const fromEmail =
        this.configService.get("EMAIL_FROM") ||
        this.configService.get("EMAIL_USER");

      const mailOptions = {
        from: fromEmail,
        to: email,
        subject: "Your Login OTP - GLYVEXA",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">Your Login Verification Code</h2>
            <p>Your one-time password (OTP) for login is:</p>
            <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; padding: 20px; background: #f3f4f6; border-radius: 8px; text-align: center; margin: 20px 0;">
              ${otp}
            </div>
            <p>This OTP will expire in 10 minutes.</p>
            <p>If you didn't request this, please ignore this email.</p>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              GLYVEXA<br>
              AI & Software Solutions
            </p>
          </div>
        `,
      };

      await this.transporter.sendMail(mailOptions);
      console.log("📧 OTP sent to:", email);
    } catch (error) {
      console.error("Failed to send OTP email:", error);
      // In development, don't fail - just log the OTP
      if (process.env.NODE_ENV === "development") {
        console.log("\n========================================");
        console.log("🔐 OTP for", email, ":", otp, "(fallback)");
        console.log("========================================\n");
        return;
      }
      throw new UnauthorizedException("Failed to send OTP");
    }
  }

  // Request OTP for login
  async requestLoginOTP(email: string): Promise<{ message: string }> {
    // Check for account lockout
    this.checkFailedAttempts(email);

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      // Don't reveal if user exists
      return { message: "If the email exists, an OTP will be sent" };
    }

    const otp = this.generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    this.otpStorage.set(email, { otp, expiresAt });

    await this.sendOTPEmail(email, otp);

    return { message: "OTP sent to your email" };
  }

  // Verify OTP and login
  async verifyOTPAndLogin(
    email: string,
    otp: string,
  ): Promise<{
    accessToken: string;
    refreshToken: string;
    user: any;
  }> {
    const storedData = this.otpStorage.get(email);

    if (!storedData) {
      throw new UnauthorizedException("Invalid or expired OTP");
    }

    if (new Date() > storedData.expiresAt) {
      this.otpStorage.delete(email);
      throw new UnauthorizedException("OTP has expired");
    }

    if (storedData.otp !== otp) {
      this.recordFailedAttempt(email);
      throw new UnauthorizedException("Invalid OTP");
    }

    // Clear failed attempts on successful OTP verification
    this.clearFailedAttempts(email);

    // OTP verified, delete from storage
    this.otpStorage.delete(email);

    // Find user and generate tokens
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    return this.login(user);
  }

  // Resend OTP
  async resendOTP(email: string): Promise<{ message: string }> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return { message: "If the email exists, an OTP will be sent" };
    }

    const otp = this.generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    this.otpStorage.set(email, { otp, expiresAt });

    await this.sendOTPEmail(email, otp);

    return { message: "OTP resent to your email" };
  }

  // Validate user credentials and return tokens directly
  async validateAndLogin(
    email: string,
    password: string,
  ): Promise<{
    accessToken: string;
    refreshToken: string;
    user: any;
  }> {
    // Check for account lockout first
    this.checkFailedAttempts(email);

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // Record failed attempt
      this.recordFailedAttempt(email);
      throw new UnauthorizedException("Invalid credentials");
    }

    if (!user.isActive) {
      throw new UnauthorizedException("Invalid credentials");
    }

    // Clear failed attempts on successful login
    this.clearFailedAttempts(email);

    // Return tokens directly
    return this.login(user);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    if (!user.isActive) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    } as unknown as User;
  }

  async login(user: Partial<User>) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>("JWT_REFRESH_SECRET"),
      expiresIn: this.configService.get<string>("JWT_REFRESH_EXPIRES_IN"),
    });

    await this.usersService.updateRefreshToken(user.id as string, refreshToken);

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        isActive: (user as any).isActive ?? true,
      },
    };
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>("JWT_REFRESH_SECRET"),
      });

      const usersSvc: any = this.usersService as any;
      const user = usersSvc.findOne
        ? await usersSvc.findOne(payload.sub)
        : await usersSvc.findById(payload.sub);
      if (!user || user.refreshToken !== refreshToken) {
        throw new UnauthorizedException("Invalid refresh token");
      }

      const result = await this.login(user);
      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      };
    } catch (error) {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }

  // Backwards-compatible wrapper expected by tests
  async refreshToken(refreshToken: string) {
    return this.refreshTokens(refreshToken);
  }

  async logout(userId: string) {
    await this.usersService.updateRefreshToken(userId, null);
  }

  async register(userData: {
    name: string;
    phone: string;
    email: string;
    password: string;
    role?: string;
  }) {
    const existingUser = await this.usersService.findByEmail(userData.email);
    if (existingUser) {
      throw new UnauthorizedException("User already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Check if this is the owner email - make them admin automatically
    const ownerEmail =
      this.configService.get("OWNER_EMAIL") || "debadattajena552@gmail.com";
    const isOwner = userData.email.toLowerCase() === ownerEmail.toLowerCase();

    const user = await this.usersService.create({
      ...userData,
      password: hashedPassword,
      role: isOwner ? UserRole.ADMIN : UserRole.CLIENT,
    });

    return this.login(user);
  }

  async getProfile(userId: string) {
    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: (user as any).isActive ?? true,
    };
  }

  // Generate CSRF token for session protection
  generateCSRFToken(): string {
    return randomBytes(32).toString('hex');
  }
}
