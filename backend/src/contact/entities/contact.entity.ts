import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("contact_messages")
export class Contact {
  @ApiProperty({ description: "Unique identifier" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ description: "Contact name" })
  @Column({ type: "varchar", length: 255 })
  name: string;

  @ApiProperty({ description: "Company name" })
  @Column({ type: "varchar", length: 255, nullable: true })
  company?: string;

  @ApiProperty({ description: "Email address" })
  @Column({ type: "varchar", length: 255 })
  email: string;

  @ApiProperty({ description: "Phone number" })
  @Column({ type: "varchar", length: 50, nullable: true })
  phone?: string;

  @ApiProperty({ description: "Service interest" })
  @Column({ type: "varchar", length: 100, nullable: true })
  serviceInterest?: string;

  @ApiProperty({ description: "Project budget" })
  @Column({ type: "varchar", length: 50, nullable: true })
  budget?: string;

  @ApiProperty({ description: "Message content" })
  @Column({ type: "text" })
  message: string;

  @ApiProperty({ description: "Contact source" })
  @Column({
    type: "varchar",
    length: 50,
    default: "website",
  })
  source: "website" | "email" | "phone" | "referral" | "social" | "other";

  @ApiProperty({ description: "Contact status" })
  @Column({
    type: "varchar",
    length: 20,
    default: "new",
  })
  status: "new" | "in-progress" | "completed" | "archived";

  @ApiProperty({ description: "Priority level" })
  @Column({
    type: "varchar",
    length: 20,
    default: "medium",
  })
  priority: "low" | "medium" | "high" | "urgent";

  @ApiProperty({ description: "Assigned to user ID" })
  @Column({ type: "varchar", length: 255, nullable: true })
  assignedTo?: string;

  @ApiProperty({ description: "Message tags" })
  @Column({ type: "simple-array", nullable: true })
  tags?: string[];

  @ApiProperty({ description: "Internal notes" })
  @Column({ type: "text", nullable: true })
  internalNotes?: string;

  @ApiProperty({ description: "Is newsletter subscription" })
  @Column({ type: "boolean", default: false })
  subscribeToNewsletter: boolean;

  @ApiProperty({ description: "IP address" })
  @Column({ type: "varchar", length: 45, nullable: true })
  ipAddress?: string;

  @ApiProperty({ description: "User agent" })
  @Column({ type: "text", nullable: true })
  userAgent?: string;

  @ApiProperty({ description: "UTM source" })
  @Column({ type: "varchar", length: 255, nullable: true })
  utmSource?: string;

  @ApiProperty({ description: "UTM medium" })
  @Column({ type: "varchar", length: 255, nullable: true })
  utmMedium?: string;

  @ApiProperty({ description: "UTM campaign" })
  @Column({ type: "varchar", length: 255, nullable: true })
  utmCampaign?: string;

  @ApiProperty({ description: "Response date" })
  @Column({ type: "datetime", nullable: true })
  respondedAt?: Date;

  @ApiProperty({ description: "Creation timestamp" })
  @CreateDateColumn({ type: "datetime" })
  createdAt: Date;

  @ApiProperty({ description: "Last update timestamp" })
  @UpdateDateColumn({ type: "datetime" })
  updatedAt: Date;
}
