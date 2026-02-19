import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("projects")
export class Project {
  @ApiProperty({ description: "Unique identifier" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ description: "Project title" })
  @Column({ type: "varchar", length: 255 })
  title: string;

  @ApiProperty({ description: "Project description" })
  @Column({ type: "text" })
  description: string;

  @ApiProperty({ description: "Detailed project information" })
  @Column({ type: "text", nullable: true })
  details?: string;

  @ApiProperty({ description: "Project category" })
  @Column({ type: "varchar", length: 100 })
  category: string;

  @ApiProperty({ description: "Technologies used" })
  @Column({ type: "simple-array" })
  technologies: string[];

  @ApiProperty({ description: "Project features" })
  @Column({ type: "simple-array" })
  features: string[];

  @ApiProperty({ description: "Project URL" })
  @Column({ type: "varchar", length: 500, nullable: true })
  projectUrl?: string;

  @ApiProperty({ description: "GitHub repository URL" })
  @Column({ type: "varchar", length: 500, nullable: true })
  githubUrl?: string;

  @ApiProperty({ description: "Main project image URL" })
  @Column({ type: "varchar", length: 500, nullable: true })
  imageUrl?: string;

  @ApiProperty({ description: "Additional project images" })
  @Column({ type: "simple-array", nullable: true })
  imageUrls?: string[];

  @ApiProperty({ description: "Client name" })
  @Column({ type: "varchar", length: 255, nullable: true })
  clientName?: string;

  @ApiProperty({ description: "Client company" })
  @Column({ type: "varchar", length: 255, nullable: true })
  clientCompany?: string;

  @ApiProperty({ description: "Project status" })
  @Column({
    type: "varchar",
    length: 50,
    default: "completed",
  })
  status: "planning" | "in-progress" | "completed" | "on-hold" | "cancelled";

  @ApiProperty({ description: "Project priority" })
  @Column({
    type: "varchar",
    length: 20,
    default: "medium",
  })
  priority: "low" | "medium" | "high" | "urgent";

  @ApiProperty({ description: "Start date" })
  @Column({ type: "date", nullable: true })
  startDate?: Date;

  @ApiProperty({ description: "End date" })
  @Column({ type: "date", nullable: true })
  endDate?: Date;

  @ApiProperty({ description: "Estimated hours" })
  @Column({ type: "int", nullable: true })
  estimatedHours?: number;

  @ApiProperty({ description: "Actual hours spent" })
  @Column({ type: "int", nullable: true })
  actualHours?: number;

  @ApiProperty({ description: "Project cost" })
  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  cost?: number;

  @ApiProperty({ description: "Is project featured" })
  @Column({ type: "boolean", default: false })
  isFeatured: boolean;

  @ApiProperty({ description: "Is project visible to public" })
  @Column({ type: "boolean", default: true })
  isVisible: boolean;

  @ApiProperty({ description: "Project tags" })
  @Column({ type: "simple-array", nullable: true })
  tags?: string[];

  @ApiProperty({ description: "Project notes" })
  @Column({ type: "text", nullable: true })
  notes?: string;

  @ApiProperty({ description: "Creation timestamp" })
  @CreateDateColumn({ type: "datetime" })
  createdAt: Date;

  @ApiProperty({ description: "Last update timestamp" })
  @UpdateDateColumn({ type: "datetime" })
  updatedAt: Date;
}
