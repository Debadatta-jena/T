import {
  IsString,
  IsArray,
  IsOptional,
  IsEnum,
  IsUrl,
  IsDateString,
  IsNumber,
  IsBoolean,
  Min,
  Max,
} from "class-validator";

export class CreateProjectDto {
  @IsString()
  @Min(2)
  @Max(255)
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  details?: string;

  @IsString()
  @IsEnum([
    "website-development",
    "ai-chatbots",
    "ai-agents",
    "voice-bots",
    "mobile-apps",
    "academic-projects",
    "other",
  ])
  category: string;

  @IsArray()
  @IsString({ each: true })
  technologies: string[];

  @IsArray()
  @IsString({ each: true })
  features: string[];

  @IsOptional()
  @IsUrl()
  projectUrl?: string;

  @IsOptional()
  @IsUrl()
  githubUrl?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  imageUrls?: string[];

  @IsOptional()
  @IsString()
  @Max(255)
  clientName?: string;

  @IsOptional()
  @IsString()
  @Max(255)
  clientCompany?: string;

  @IsOptional()
  @IsEnum(["planning", "in-progress", "completed", "on-hold", "cancelled"])
  status?: "planning" | "in-progress" | "completed" | "on-hold" | "cancelled";

  @IsOptional()
  @IsEnum(["low", "medium", "high", "urgent"])
  priority?: "low" | "medium" | "high" | "urgent";

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  estimatedHours?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  cost?: number;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @IsBoolean()
  isVisible?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  notes?: string;
}
