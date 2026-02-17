import {
  IsString,
  IsOptional,
  IsEmail,
  IsEnum,
  IsBoolean,
} from "class-validator";

export class CreateContactDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  serviceInterest?: string;

  @IsOptional()
  @IsString()
  budget?: string;

  @IsString()
  message: string;

  @IsOptional()
  @IsEnum(["website", "email", "phone", "referral", "social", "other"])
  source?: string;

  @IsOptional()
  @IsEnum(["low", "medium", "high", "urgent"])
  priority?: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsString()
  userAgent?: string;

  @IsOptional()
  @IsString()
  utmSource?: string;

  @IsOptional()
  @IsString()
  utmMedium?: string;

  @IsOptional()
  @IsString()
  utmCampaign?: string;

  @IsOptional()
  @IsBoolean()
  subscribeToNewsletter?: boolean;
}
