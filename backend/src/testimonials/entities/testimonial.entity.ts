import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/entities/user.entity";

@Entity("testimonials")
export class Testimonial {
  @ApiProperty({ description: "Unique identifier" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ description: "Client name" })
  @Column({ type: "varchar", length: 255 })
  clientName: string;

  @ApiProperty({ description: "Client company" })
  @Column({ type: "varchar", length: 255, nullable: true })
  clientCompany?: string;

  @ApiProperty({ description: "Client position" })
  @Column({ type: "varchar", length: 255, nullable: true })
  clientPosition?: string;

  @ApiProperty({ description: "Client avatar URL" })
  @Column({ type: "varchar", length: 500, nullable: true })
  avatarUrl?: string;

  @ApiProperty({ description: "Testimonial content" })
  @Column({ type: "text" })
  content: string;

  @ApiProperty({ description: "Testimonial rating (1-5)" })
  @Column({ type: "int", nullable: true })
  rating?: number;

  @ApiProperty({ description: "Project title this testimonial is for" })
  @Column({ type: "varchar", length: 255, nullable: true })
  projectTitle?: string;

  @ApiProperty({ description: "Service category" })
  @Column({ type: "varchar", length: 100, nullable: true })
  serviceCategory?: string;

  @ApiProperty({ description: "Testimonial status" })
  @Column({
    type: "varchar",
    length: 20,
    default: "pending",
  })
  status: "pending" | "approved" | "rejected" | "hidden";

  @ApiProperty({ description: "Is testimonial featured" })
  @Column({ type: "boolean", default: false })
  isFeatured: boolean;

  @ApiProperty({ description: "Is testimonial visible to public" })
  @Column({ type: "boolean", default: false })
  isVisible: boolean;

  @ApiProperty({ description: "Admin notes about testimonial" })
  @Column({ type: "text", nullable: true })
  adminNotes?: string;

  @ApiProperty({ description: "Client email for verification" })
  @Column({ type: "varchar", length: 255, nullable: true })
  clientEmail?: string;

  @ApiProperty({ description: "Testimonial date" })
  @Column({ type: "date", nullable: true })
  testimonialDate?: Date;

  @ApiProperty({ description: "Social media links" })
  @Column({ type: "simple-array", nullable: true })
  socialLinks?: string[];

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: "approvedBy" })
  approvedBy?: User;

  @ApiProperty({ description: "Creation timestamp" })
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @ApiProperty({ description: "Last update timestamp" })
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
