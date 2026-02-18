import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { FeedbackService } from "./feedback.service";
import { CreateFeedbackDto } from "./dto/create-feedback.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { UserRole } from "../users/entities/user.entity";

@ApiTags("feedback")
@Controller("feedback")
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  // Public - anyone can submit feedback
  @Post()
  @ApiOperation({ summary: "Submit feedback" })
  @ApiResponse({ status: 201, description: "Feedback submitted successfully" })
  @ApiResponse({ status: 400, description: "Invalid input" })
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  // Admin only - get all feedback
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get all feedback (Admin only)" })
  @ApiResponse({ status: 200, description: "Feedback retrieved successfully" })
  @ApiResponse({ status: 403, description: "Forbidden" })
  findAll() {
    return this.feedbackService.findAll();
  }

  // Admin only - get feedback stats
  @Get("stats")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get feedback statistics (Admin only)" })
  @ApiResponse({ status: 200, description: "Stats retrieved successfully" })
  getStats() {
    return this.feedbackService.getStats();
  }

  // Admin only - get single feedback
  @Get(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get feedback by ID (Admin only)" })
  @ApiResponse({ status: 200, description: "Feedback retrieved successfully" })
  @ApiResponse({ status: 404, description: "Feedback not found" })
  findOne(@Param("id") id: string) {
    return this.feedbackService.findOne(id);
  }

  // Admin only - update feedback status
  @Patch(":id/status")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update feedback status (Admin only)" })
  @ApiResponse({ status: 200, description: "Feedback status updated" })
  updateStatus(@Param("id") id: string, @Body("status") status: string) {
    return this.feedbackService.updateStatus(id, status);
  }

  // Admin only - mark as read
  @Patch(":id/read")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Mark feedback as read (Admin only)" })
  @ApiResponse({ status: 200, description: "Feedback marked as read" })
  markAsRead(@Param("id") id: string) {
    return this.feedbackService.markAsRead(id);
  }

  // Admin only - delete feedback
  @Delete(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete feedback (Admin only)" })
  @ApiResponse({ status: 200, description: "Feedback deleted successfully" })
  @ApiResponse({ status: 404, description: "Feedback not found" })
  remove(@Param("id") id: string) {
    return this.feedbackService.remove(id);
  }
}
