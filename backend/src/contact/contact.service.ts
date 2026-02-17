import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";
import { Contact } from "./entities/contact.entity";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { PaginatedResult } from "../common/interfaces/paginated-result.interface";

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
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

  private async sendNotificationEmail(contact: Contact): Promise<void> {
    const emailUser = this.configService.get("EMAIL_USER");
    const emailPass = this.configService.get("EMAIL_PASS");

    // Check if email is configured (not placeholder)
    if (!emailUser || !emailPass || emailPass === "your-app-password" || emailUser === "your-email@gmail.com") {
      console.log("📧 Email not configured, skipping notification");
      return;
    }

    try {
      const adminEmail = emailUser;
      const fromEmail = this.configService.get("EMAIL_FROM");

      const mailOptions = {
        from: fromEmail || "noreply@ai-solutions.com",
        to: adminEmail,
        subject: `New Contact Form Submission - ${contact.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${contact.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${contact.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${contact.phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${contact.company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service Interest:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${contact.serviceInterest || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${contact.message}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Submitted:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; color: #666;">
              <a href="http://localhost:3000/admin/messages" style="color: #4F46E5;">View in Admin Dashboard</a>
            </p>
          </div>
        `,
      };

      await this.transporter.sendMail(mailOptions);
      console.log("📧 Notification email sent for contact:", contact.id);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Failed to send notification email:", errorMessage);
      // Don't throw error - contact was saved successfully
    }
  }

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    try {
      const contact = this.contactRepository.create({
        ...createContactDto,
        status: "new",
        priority: "medium",
        source: "website",
      });

      const savedContact = await this.contactRepository.save(contact);

      // Send email notification
      await this.sendNotificationEmail(savedContact);

      return savedContact;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new BadRequestException(
        "Failed to create contact: " + errorMessage,
      );
    }
  }

  async findAll(
    page = 1,
    limit = 10,
    status?: string,
  ): Promise<PaginatedResult<Contact>> {
    const skip = (page - 1) * limit;

    const queryBuilder = this.contactRepository.createQueryBuilder("contact");

    if (status) {
      queryBuilder.andWhere("contact.status = :status", { status });
    }

    const [contacts, total] = await queryBuilder
      .orderBy("contact.createdAt", "DESC")
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return {
      data: contacts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.contactRepository.findOne({ where: { id } });

    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }

    return contact;
  }

  async update(
    id: string,
    updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    try {
      const contact = await this.findOne(id);

      // Handle source and priority field conversion if needed
      const { source, priority, ...otherFields } = updateContactDto;

      const updatedContact = this.contactRepository.merge(contact, otherFields);

      // Only update source if it's a valid enum value
      if (
        source &&
        ["website", "email", "phone", "referral", "social", "other"].includes(
          source,
        )
      ) {
        updatedContact.source = source as any;
      }

      // Only update priority if it's a valid enum value
      if (priority && ["low", "medium", "high", "urgent"].includes(priority)) {
        updatedContact.priority = priority as any;
      }
      return await this.contactRepository.save(updatedContact);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new BadRequestException(
        "Failed to update contact: " + errorMessage,
      );
    }
  }

  async remove(id: string): Promise<void> {
    const contact = await this.findOne(id);
    await this.contactRepository.remove(contact);
  }

  async getContactStats(): Promise<any> {
    const total = await this.contactRepository.count();
    const newCount = await this.contactRepository.count({
      where: { status: "new" },
    });
    const inProgress = await this.contactRepository.count({
      where: { status: "in-progress" },
    });
    const completed = await this.contactRepository.count({
      where: { status: "completed" },
    });

    return {
      total,
      new: newCount,
      inProgress,
      completed,
    };
  }

  async updateStatus(
    id: string,
    status: string,
    assignedTo?: string,
  ): Promise<Contact> {
    const contact = await this.findOne(id);
    contact.status = status as any;

    if (assignedTo) {
      contact.assignedTo = assignedTo;
    }

    if (status === "in-progress") {
      contact.respondedAt = new Date();
    }

    return await this.contactRepository.save(contact);
  }
}
