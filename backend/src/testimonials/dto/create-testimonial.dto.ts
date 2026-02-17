import {
  IsString,
  IsOptional,
  IsEmail,
  IsEnum,
  IsNumber,
  IsDateString,
  IsArray,
  IsUrl,
  Min,
  Max,
} from "class-validator";

export class CreateTestimonialDto {
  @IsString()
  @Min(2)
  @Max(255)
  clientName: string;

  @IsOptional()
  @IsString()
  @Max(255)
  clientCompany?: string;

  @IsOptional()
  @IsString()
  @Max(255)
  clientPosition?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating?: number;

  @IsOptional()
  @IsString()
  @Max(255)
  projectTitle?: string;

  @IsOptional()
  @IsEnum([
    "website-development",
    "ai-chatbots",
    "ai-agents",
    "voice-bots",
    "mobile-apps",
    "academic-projects",
    "other",
  ])
  serviceCategory?: string;

  @IsOptional()
  @IsEmail()
  clientEmail?: string;

  @IsOptional()
  @IsDateString()
  testimonialDate?: string;

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  socialLinks?: string[];

  @IsOptional()
  @IsString()
  projectId?: string;
}
