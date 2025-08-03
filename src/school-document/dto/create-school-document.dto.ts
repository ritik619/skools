import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateSchoolDocumentDto {
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
  documentContent: string;

  @IsOptional()
  @IsString()
  documentType?: string; // PDF, DOCX, HTML, etc.

  @IsOptional()
  @IsString()
  category?: string; // Academic, Administrative, Financial, etc.

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsNotEmpty()
  @IsString()
  schoolId: string;

  @IsOptional()
  @IsString()
  templateId?: string;
}
