import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateDocumentTemplateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  templateContent: string;

  @IsOptional()
  @IsString()
  templateType?: string; // PDF, DOCX, HTML, etc.

  @IsOptional()
  @IsString()
  category?: string; // Academic, Administrative, Financial, etc.

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  version?: string;
}
