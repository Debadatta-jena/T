import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export enum UserRole {
  ADMIN = "admin",
  CLIENT = "client",
}

@Entity("users")
export class User {
  @ApiProperty({ description: "User ID" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ description: "User name" })
  @Column()
  name: string;

  @ApiProperty({ description: "User email" })
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ApiProperty({ description: "User role", enum: UserRole })
  @Column({
    type: "varchar",
    default: UserRole.CLIENT,
  })
  role: UserRole;

  @Column({ type: "text", nullable: true })
  refreshToken: string;

  @ApiProperty({ description: "User phone number" })
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({ description: "User company" })
  @Column({ nullable: true })
  company: string;

  @ApiProperty({ description: "Is user active" })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ description: "Is email verified" })
  @Column({ default: false })
  isEmailVerified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Projects relation removed - keep user entity self-contained for tests
  projects: any[];
}
