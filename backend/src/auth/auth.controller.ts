import {
  Controller,
  Post,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  Get,
  Request,
  Response,
  Res,
  UnauthorizedException,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { CsrfGuard } from "../common/guards/csrf.guard";
import { CookieInterceptor } from "../common/interceptors/cookie.interceptor";
import { UseInterceptors } from "@nestjs/common";

@ApiTags("auth")
@Controller("auth")
@UseInterceptors(CookieInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  @ApiOperation({ summary: "Register a new user" })
  @ApiResponse({ status: 201, description: "User successfully registered" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 409, description: "User already exists" })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Login with email and password" })
  @ApiResponse({ status: 200, description: "Login successful" })
  @ApiResponse({ status: 401, description: "Invalid credentials" })
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response: any) {
    const result = await this.authService.validateAndLogin(loginDto.email, loginDto.password);
    
    // Set CSRF token in session
    if (result.user) {
      response.session.csrfToken = this.authService.generateCSRFToken();
    }
    
    return result;
  }

  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  @UseGuards(CsrfGuard)
  @ApiOperation({ summary: "Refresh access token" })
  @ApiResponse({ status: 200, description: "Token refreshed successfully" })
  @ApiResponse({ status: 401, description: "Invalid refresh token" })
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto, @Request() req) {
    // Extract refresh token from cookie
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException('No refresh token provided');
    }
    return this.authService.refreshToken(refreshToken);
  }

  @UseGuards(JwtAuthGuard, CsrfGuard)
  @Post("logout")
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Logout user" })
  @ApiResponse({ status: 200, description: "Logout successful" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async logout(@Request() req, @Res({ passthrough: true }) response: any) {
    await this.authService.logout(req.user.sub);
    
    // Clear cookies
    response.clearCookie('accessToken');
    response.clearCookie('refreshToken');
    response.session.csrfToken = null;
    
    return { message: "Logged out successfully" };
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get user profile" })
  @ApiResponse({ status: 200, description: "Profile retrieved successfully" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getProfile(@Request() req) {
    return this.authService.getProfile(req.user.sub);
  }

  @Get("csrf-token")
  @ApiOperation({ summary: "Get CSRF token" })
  @ApiResponse({ status: 200, description: "CSRF token generated" })
  async getCSRFToken(@Request() req, @Res({ passthrough: true }) response: any) {
    const csrfToken = this.authService.generateCSRFToken();
    response.session.csrfToken = csrfToken;
    return { csrfToken };
  }
}
