import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
jest.mock("bcrypt");
import { User, UserRole } from "../users/entities/user.entity";
import { ConfigService } from "@nestjs/config";

describe("AuthService", () => {
  let service: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  const mockUser: User = {
    id: "1",
    name: "Test User",
    email: "test@example.com",
    password: "hashedPassword",
    role: UserRole.CLIENT,
    refreshToken: null,
    phone: null,
    company: null,
    isActive: true,
    isEmailVerified: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    projects: [],
  } as unknown as User;

  const mockUsersService = {
    findByEmail: jest.fn(),
    create: jest.fn(),
    updateRefreshToken: jest.fn(),
    removeRefreshToken: jest.fn(),
    findOne: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
    verify: jest.fn(),
  };

  const mockConfigService = {
    get: jest.fn().mockImplementation((key: string) => {
      if (key === "JWT_REFRESH_SECRET") return "refresh-secret";
      if (key === "JWT_REFRESH_EXPIRES_IN") return "7d";
      return null;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("validateUser", () => {
    it("should return user if credentials are valid", async () => {
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockUsersService.findByEmail.mockResolvedValue(mockUser);

      const result = await service.validateUser("test@example.com", "password");

      expect(result).toEqual({
        id: mockUser.id,
        name: mockUser.name,
        email: mockUser.email,
        role: mockUser.role,
        isActive: mockUser.isActive,
      });
      expect(usersService.findByEmail).toHaveBeenCalledWith("test@example.com");
    });

    it("should throw UnauthorizedException if user not found", async () => {
      mockUsersService.findByEmail.mockResolvedValue(null);

      await expect(
        service.validateUser("test@example.com", "password"),
      ).rejects.toThrow(UnauthorizedException);
    });

    it("should throw UnauthorizedException if password is invalid", async () => {
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        service.validateUser("test@example.com", "wrongpassword"),
      ).rejects.toThrow(UnauthorizedException);
    });

    it("should throw UnauthorizedException if user is inactive", async () => {
      const inactiveUser = { ...mockUser, isActive: false };
      mockUsersService.findByEmail.mockResolvedValue(inactiveUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      await expect(
        service.validateUser("test@example.com", "password"),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe("login", () => {
    it("should return access and refresh tokens on successful login", async () => {
      const validatedUser = {
        id: mockUser.id,
        name: mockUser.name,
        email: mockUser.email,
        role: mockUser.role,
        isActive: mockUser.isActive,
      };

      mockJwtService.sign
        .mockReturnValueOnce("accessToken")
        .mockReturnValueOnce("refreshToken");
      mockUsersService.updateRefreshToken.mockResolvedValue(undefined);

      const result = await service.login(validatedUser);

      expect(result).toEqual({
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        user: validatedUser,
      });
      expect(jwtService.sign).toHaveBeenCalledTimes(2);
      expect(usersService.updateRefreshToken).toHaveBeenCalledWith(
        validatedUser.id,
        "refreshToken",
      );
    });
  });

  describe("refreshToken", () => {
    it("should return new tokens if refresh token is valid", async () => {
      const payload = {
        sub: mockUser.id,
        email: mockUser.email,
        role: mockUser.role,
      };
      mockJwtService.verify.mockReturnValue(payload);
      mockUsersService.findOne.mockResolvedValue(mockUser);
      mockUser.refreshToken = "valid-refresh-token";
      mockJwtService.sign
        .mockReturnValueOnce("newAccessToken")
        .mockReturnValueOnce("newRefreshToken");
      mockUsersService.updateRefreshToken.mockResolvedValue(undefined);

      const result = await service.refreshToken("valid-refresh-token");

      expect(result).toEqual({
        accessToken: "newAccessToken",
        refreshToken: "newRefreshToken",
      });
    });

    it("should throw UnauthorizedException if refresh token is invalid", async () => {
      mockJwtService.verify.mockImplementation(() => {
        throw new Error("Invalid token");
      });

      await expect(service.refreshToken("invalidToken")).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it("should throw UnauthorizedException if user not found", async () => {
      const payload = {
        sub: "invalidId",
        email: "test@example.com",
        role: "client",
      };
      mockJwtService.verify.mockReturnValue(payload);
      mockUsersService.findOne.mockResolvedValue(null);

      await expect(service.refreshToken("validToken")).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  describe("logout", () => {
    it("should remove refresh token", async () => {
      const userId = "1";
      mockUsersService.removeRefreshToken.mockResolvedValue(undefined);

      await service.logout(userId);

      expect(usersService.updateRefreshToken).toHaveBeenCalledWith(
        userId,
        null,
      );
    });
  });

  describe("register", () => {
    it("should create new user and return tokens", async () => {
      const registerDto = {
        name: "New User",
        phone: "9692292496",
        email: "newuser@example.com",
        password: "password123",
        role: "client" as const,
      };

      mockUsersService.findByEmail.mockResolvedValue(null);

      const newUser = { ...mockUser, id: "2", email: registerDto.email };
      mockUsersService.create.mockResolvedValue(newUser);
      mockJwtService.sign
        .mockReturnValueOnce("accessToken")
        .mockReturnValueOnce("refreshToken");
      mockUsersService.updateRefreshToken.mockResolvedValue(undefined);

      const result = await service.register(registerDto);

      expect(result).toEqual({
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          isActive: newUser.isActive,
        },
      });
      expect(usersService.create).toHaveBeenCalledWith(
        expect.objectContaining({
          name: registerDto.name,
          email: registerDto.email,
          role: registerDto.role,
        }),
      );
    });
  });
});
