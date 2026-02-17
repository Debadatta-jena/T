import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";

describe("AuthController", () => {
  let controller: AuthController;
  let authService: AuthService;

  const mockAuthService = {
    validateUser: jest.fn(),
    login: jest.fn(),
    refreshToken: jest.fn(),
    logout: jest.fn(),
    register: jest.fn(),
    getProfile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("login", () => {
    it("should return tokens and user data on successful login", async () => {
      const loginDto: LoginDto = {
        email: "test@example.com",
        password: "password123",
      };

      const expectedResponse = {
        accessToken: "access-token",
        refreshToken: "refresh-token",
        user: {
          id: "1",
          name: "Test User",
          email: "test@example.com",
          role: "client" as any,
          isActive: true,
        },
      };

      mockAuthService.validateUser.mockResolvedValue(expectedResponse.user);
      mockAuthService.login.mockResolvedValue(expectedResponse);

      const result = await controller.login(loginDto);

      expect(result).toEqual(expectedResponse);
      expect(authService.validateUser).toHaveBeenCalledWith(
        loginDto.email,
        loginDto.password,
      );
      expect(authService.login).toHaveBeenCalledWith(expectedResponse.user);
    });

    it("should throw UnauthorizedException on invalid credentials", async () => {
      const loginDto: LoginDto = {
        email: "test@example.com",
        password: "wrongpassword",
      };

      mockAuthService.validateUser.mockRejectedValue(
        new Error("Invalid credentials"),
      );

      await expect(controller.login(loginDto)).rejects.toThrow(
        "Invalid credentials",
      );
    });
  });

  describe("register", () => {
    it("should create new user and return tokens", async () => {
      const registerDto: RegisterDto = {
        name: "New User",
        phone: "9692292496",
        email: "newuser@example.com",
        password: "password123",
        role: "client" as any,
      };

      const expectedResponse = {
        accessToken: "access-token",
        refreshToken: "refresh-token",
        user: {
          id: "2",
          name: "New User",
          email: "newuser@example.com",
          role: "client",
          isActive: true,
        },
      };

      mockAuthService.register.mockResolvedValue(expectedResponse);

      const result = await controller.register(registerDto);

      expect(result).toEqual(expectedResponse);
      expect(authService.register).toHaveBeenCalledWith(registerDto);
    });
  });

  describe("refreshToken", () => {
    it("should return new tokens", async () => {
      const refreshTokenDto: RefreshTokenDto = {
        refreshToken: "valid-refresh-token",
      };

      const expectedResponse = {
        accessToken: "new-access-token",
        refreshToken: "new-refresh-token",
      };

      mockAuthService.refreshToken.mockResolvedValue(expectedResponse);

      const result = await controller.refreshToken(refreshTokenDto);

      expect(result).toEqual(expectedResponse);
      expect(authService.refreshToken).toHaveBeenCalledWith(
        refreshTokenDto.refreshToken,
      );
    });

    it("should throw UnauthorizedException on invalid refresh token", async () => {
      const refreshTokenDto: RefreshTokenDto = {
        refreshToken: "invalid-refresh-token",
      };

      mockAuthService.refreshToken.mockRejectedValue(
        new Error("Invalid token"),
      );

      await expect(controller.refreshToken(refreshTokenDto)).rejects.toThrow(
        "Invalid token",
      );
    });
  });

  describe("logout", () => {
    it("should logout user successfully", async () => {
      const mockRequest = {
        user: { sub: "1" },
      };

      mockAuthService.logout.mockResolvedValue(undefined);

      const result = await controller.logout(mockRequest);

      expect(result).toEqual({ message: "Logged out successfully" });
      expect(authService.logout).toHaveBeenCalledWith("1");
    });
  });

  describe("getProfile", () => {
    it("should return user profile", async () => {
      const mockRequest = {
        user: { sub: "1" },
      };

      const expectedUser = {
        id: "1",
        name: "Test User",
        email: "test@example.com",
        role: "client",
        isActive: true,
      };

      mockAuthService.getProfile.mockResolvedValue(expectedUser);

      const result = await controller.getProfile(mockRequest);

      expect(result).toEqual(expectedUser);
    });
  });
});
