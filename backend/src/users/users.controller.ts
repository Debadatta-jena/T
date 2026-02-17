import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { UserRole } from "./entities/user.entity";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Public endpoint to get user count (no auth required)
  @Get("count")
  @ApiOperation({ summary: "Get total user count" })
  @ApiResponse({ status: 200, description: "User count retrieved" })
  getCount() {
    return this.usersService.getCount();
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create a new user (Admin only)" })
  @ApiResponse({ status: 201, description: "User successfully created" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get all users (Admin only)" })
  @ApiResponse({ status: 200, description: "Users retrieved successfully" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  findAll() {
    return this.usersService.findAll();
  }

  @Get("profile")
  @ApiOperation({ summary: "Get current user profile" })
  @ApiResponse({ status: 200, description: "Profile retrieved successfully" })
  getProfile(@Request() req) {
    return this.usersService.findOne(req.user.sub);
  }

  @Get(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get user by ID (Admin only)" })
  @ApiResponse({ status: 200, description: "User retrieved successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update user (Admin only)" })
  @ApiResponse({ status: 200, description: "User updated successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Delete user (Admin only)" })
  @ApiResponse({ status: 200, description: "User deleted successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }

  @Patch(":id/deactivate")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Deactivate user (Admin only)" })
  @ApiResponse({ status: 200, description: "User deactivated successfully" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  deactivate(@Param("id") id: string) {
    return this.usersService.deactivateUser(id);
  }

  @Patch(":id/activate")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Activate user (Admin only)" })
  @ApiResponse({ status: 200, description: "User activated successfully" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  activate(@Param("id") id: string) {
    return this.usersService.activateUser(id);
  }

  @Patch(":id/role")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Change user role (Admin only)" })
  @ApiResponse({ status: 200, description: "User role changed successfully" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  changeRole(@Param("id") id: string, @Body("role") role: UserRole) {
    return this.usersService.changeRole(id, role);
  }
}
