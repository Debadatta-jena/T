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
import { ContactService } from "./contact.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { UserRole } from "../users/entities/user.entity";

@ApiTags("contact")
@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: "Create a new contact message" })
  @ApiResponse({
    status: 201,
    description: "Contact message successfully created",
  })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get all contact messages (Admin only)" })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  @ApiQuery({ name: "status", required: false, type: String })
  @ApiResponse({
    status: 200,
    description: "Contact messages retrieved successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  async findAll(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Query("status") status?: string,
  ) {
    return this.contactService.findAll(page, limit, status);
  }

  @Get("stats")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
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
    return this.contactService.getContactStats();
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Get contact message by ID (Admin only)" })
  @ApiParam({ name: "id", description: "Contact message ID" })
  @ApiResponse({
    status: 200,
    description: "Contact message retrieved successfully",
  })
  @ApiResponse({ status: 404, description: "Contact message not found" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  findOne(@Param("id") id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update contact message (Admin only)" })
  @ApiParam({ name: "id", description: "Contact message ID" })
  @ApiResponse({
    status: 200,
    description: "Contact message updated successfully",
  })
  @ApiResponse({ status: 404, description: "Contact message not found" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  update(@Param("id") id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @Patch(":id/status")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Update contact status (Admin only)" })
  @ApiParam({ name: "id", description: "Contact message ID" })
  @ApiResponse({
    status: 200,
    description: "Contact status updated successfully",
  })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  updateStatus(
    @Param("id") id: string,
    @Body("status") status: string,
    @Body("assignedTo") assignedTo?: string,
  ) {
    return this.contactService.updateStatus(id, status, assignedTo);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: "Delete contact message (Admin only)" })
  @ApiParam({ name: "id", description: "Contact message ID" })
  @ApiResponse({
    status: 200,
    description: "Contact message deleted successfully",
  })
  @ApiResponse({ status: 404, description: "Contact message not found" })
  @ApiResponse({
    status: 403,
    description: "Forbidden - Admin access required",
  })
  remove(@Param("id") id: string) {
    return this.contactService.remove(id);
  }
}
