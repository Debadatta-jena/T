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
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { UserRole } from "../users/entities/user.entity";

@ApiTags("projects")
@Controller("projects")
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Create a new project (Admin only)" })
  @ApiResponse({ status: 201, description: "Project successfully created" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all projects with pagination" })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  @ApiQuery({ name: "category", required: false, type: String })
  @ApiResponse({ status: 200, description: "Projects retrieved successfully" })
  async findAll(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Query("category") category?: string,
  ) {
    return this.projectsService.findAll(page, limit, category);
  }

  @Get("featured")
  @ApiOperation({ summary: "Get featured projects" })
  @ApiResponse({
    status: 200,
    description: "Featured projects retrieved successfully",
  })
  findFeatured() {
    return this.projectsService.findFeatured();
  }

  @Get("category/:category")
  @ApiOperation({ summary: "Get projects by category" })
  @ApiParam({ name: "category", description: "Project category" })
  @ApiResponse({
    status: 200,
    description: "Projects by category retrieved successfully",
  })
  findByCategory(@Param("category") category: string) {
    return this.projectsService.findByCategory(category);
  }

  @Get("search")
  @ApiOperation({ summary: "Search projects" })
  @ApiQuery({ name: "q", required: true, description: "Search query" })
  @ApiResponse({
    status: 200,
    description: "Search results retrieved successfully",
  })
  searchProjects(@Query("q") query: string) {
    return this.projectsService.searchProjects(query);
  }

  @Get("stats")
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
    return this.projectsService.getProjectStats();
  }

  @Get("client/:clientName")
  @ApiOperation({ summary: "Get projects by client name" })
  @ApiParam({ name: "clientName", description: "Client name" })
  @ApiResponse({
    status: 200,
    description: "Client projects retrieved successfully",
  })
  getProjectsByClient(@Param("clientName") clientName: string) {
    return this.projectsService.getProjectsByClient(clientName);
  }

  @Get(":id")
  @ApiOperation({ summary: "Get project by ID" })
  @ApiParam({ name: "id", description: "Project ID" })
  @ApiResponse({ status: 200, description: "Project retrieved successfully" })
  @ApiResponse({ status: 404, description: "Project not found" })
  findOne(@Param("id") id: string) {
    return this.projectsService.findOne(id);
  }

  @Patch(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update project (Admin only)" })
  @ApiParam({ name: "id", description: "Project ID" })
  @ApiResponse({ status: 200, description: "Project updated successfully" })
  @ApiResponse({ status: 404, description: "Project not found" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Patch(":id/status")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Update project status (Admin only)" })
  @ApiParam({ name: "id", description: "Project ID" })
  @ApiResponse({
    status: 200,
    description: "Project status updated successfully",
  })
  updateProjectStatus(@Param("id") id: string, @Body("status") status: string) {
    return this.projectsService.updateProjectStatus(id, status);
  }

  @Patch(":id/featured")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Toggle project featured status (Admin only)" })
  @ApiParam({ name: "id", description: "Project ID" })
  @ApiResponse({
    status: 200,
    description: "Project featured status updated successfully",
  })
  toggleFeatured(@Param("id") id: string) {
    return this.projectsService.toggleFeatured(id);
  }

  @Patch(":id/visibility")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Toggle project visibility (Admin only)" })
  @ApiParam({ name: "id", description: "Project ID" })
  @ApiResponse({
    status: 200,
    description: "Project visibility updated successfully",
  })
  toggleVisibility(@Param("id") id: string) {
    return this.projectsService.toggleVisibility(id);
  }

  @Delete(":id")
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: "Delete project (Admin only)" })
  @ApiParam({ name: "id", description: "Project ID" })
  @ApiResponse({ status: 200, description: "Project deleted successfully" })
  @ApiResponse({ status: 404, description: "Project not found" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  remove(@Param("id") id: string) {
    return this.projectsService.remove(id);
  }
}
