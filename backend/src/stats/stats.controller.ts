import { Controller, Get, UseGuards } from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { StatsService } from "./stats.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { UserRole } from "../users/entities/user.entity";

@ApiTags("stats")
@Controller("stats")
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get("dashboard")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get dashboard statistics (Admin only)" })
  @ApiResponse({
    status: 200,
    description: "Dashboard statistics retrieved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  getDashboardStats() {
    return this.statsService.getDashboardStats();
  }

  @Get("projects")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get project statistics (Admin only)" })
  @ApiResponse({
    status: 200,
    description: "Project statistics retrieved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  getProjectStats() {
    return this.statsService.getProjectStats();
  }

  @Get("testimonials")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get testimonial statistics (Admin only)" })
  @ApiResponse({
    status: 200,
    description: "Testimonial statistics retrieved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  getTestimonialStats() {
    return this.statsService.getTestimonialStats();
  }

  @Get("contacts")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get contact statistics (Admin only)" })
  @ApiResponse({
    status: 200,
    description: "Contact statistics retrieved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  getContactStats() {
    return this.statsService.getContactStats();
  }

  @Get("users")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get user statistics (Admin only)" })
  @ApiResponse({
    status: 200,
    description: "User statistics retrieved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  getUserStats() {
    return this.statsService.getUserStats();
  }

  @Get("revenue")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Get revenue statistics (Admin only)" })
  @ApiResponse({
    status: 200,
    description: "Revenue statistics retrieved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  getRevenueStats() {
    return this.statsService.getRevenueStats();
  }
}
