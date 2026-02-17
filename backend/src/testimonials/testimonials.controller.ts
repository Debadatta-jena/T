import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { TestimonialsService } from "./testimonials.service";
import { CreateTestimonialDto } from "./dto/create-testimonial.dto";
import { UpdateTestimonialDto } from "./dto/update-testimonial.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { UserRole } from "../users/entities/user.entity";

@ApiTags("testimonials")
@Controller("testimonials")
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Post()
  @ApiOperation({ summary: "Create a new testimonial" })
  @ApiResponse({ status: 201, description: "Testimonial successfully created" })
  create(@Body() createTestimonialDto: CreateTestimonialDto) {
    return this.testimonialsService.create(createTestimonialDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all testimonials with pagination" })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  @ApiQuery({ name: "status", required: false, type: String })
  @ApiQuery({ name: "featured", required: false, type: Boolean })
  @ApiResponse({
    status: 200,
    description: "Testimonials retrieved successfully",
  })
  async findAll(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Query("status") status?: string,
    @Query("featured") featured?: boolean,
  ) {
    return this.testimonialsService.findAll(page, limit, status, featured);
  }

  @Get("visible")
  @ApiOperation({ summary: "Get visible testimonials for public display" })
  @ApiResponse({
    status: 200,
    description: "Visible testimonials retrieved successfully",
  })
  findVisible() {
    return this.testimonialsService.findVisible();
  }

  @Get("featured")
  @ApiOperation({ summary: "Get featured testimonials" })
  @ApiResponse({
    status: 200,
    description: "Featured testimonials retrieved successfully",
  })
  findFeatured() {
    return this.testimonialsService.findFeatured();
  }

  @Get("category/:category")
  @ApiOperation({ summary: "Get testimonials by category" })
  @ApiParam({ name: "category", description: "Service category" })
  @ApiResponse({
    status: 200,
    description: "Testimonials by category retrieved successfully",
  })
  findByCategory(@Param("category") category: string) {
    return this.testimonialsService.findByCategory(category);
  }

  @Get("stats")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
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
    return this.testimonialsService.getTestimonialStats();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get testimonial by ID" })
  @ApiParam({ name: "id", description: "Testimonial ID" })
  @ApiResponse({
    status: 200,
    description: "Testimonial retrieved successfully",
  })
  @ApiResponse({ status: 404, description: "Testimonial not found" })
  findOne(@Param("id") id: string) {
    return this.testimonialsService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update testimonial (Admin only)" })
  @ApiParam({ name: "id", description: "Testimonial ID" })
  @ApiResponse({ status: 200, description: "Testimonial updated successfully" })
  @ApiResponse({ status: 404, description: "Testimonial not found" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  update(
    @Param("id") id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
  ) {
    return this.testimonialsService.update(id, updateTestimonialDto);
  }

  @Patch(":id/approve")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Approve testimonial (Admin only)" })
  @ApiParam({ name: "id", description: "Testimonial ID" })
  @ApiResponse({
    status: 200,
    description: "Testimonial approved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  approveTestimonial(@Param("id") id: string, @Request() req: any) {
    return this.testimonialsService.approveTestimonial(id, req.user.id);
  }

  @Patch(":id/reject")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Reject testimonial (Admin only)" })
  @ApiParam({ name: "id", description: "Testimonial ID" })
  @ApiResponse({
    status: 200,
    description: "Testimonial rejected successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  rejectTestimonial(
    @Param("id") id: string,
    @Body("adminNotes") adminNotes?: string,
  ) {
    return this.testimonialsService.rejectTestimonial(id, adminNotes);
  }

  @Patch(":id/featured")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Toggle testimonial featured status (Admin only)" })
  @ApiParam({ name: "id", description: "Testimonial ID" })
  @ApiResponse({
    status: 200,
    description: "Testimonial featured status updated successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  toggleFeatured(@Param("id") id: string) {
    return this.testimonialsService.toggleFeatured(id);
  }

  @Patch(":id/visibility")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Toggle testimonial visibility (Admin only)" })
  @ApiParam({ name: "id", description: "Testimonial ID" })
  @ApiResponse({
    status: 200,
    description: "Testimonial visibility updated successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  toggleVisibility(@Param("id") id: string) {
    return this.testimonialsService.toggleVisibility(id);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete testimonial (Admin only)" })
  @ApiParam({ name: "id", description: "Testimonial ID" })
  @ApiResponse({ status: 200, description: "Testimonial deleted successfully" })
  @ApiResponse({ status: 404, description: "Testimonial not found" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  remove(@Param("id") id: string) {
    return this.testimonialsService.remove(id);
  }
}
