import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateSchoolDocumentDto {
  @ApiProperty({ description: 'The name of the document' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the document' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The description of the document', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The content of the document' })
  @IsNotEmpty()
  @IsString()
  documentContent: string;

  @ApiProperty({ description: 'The type of the document', required: false })
  @IsOptional()
  @IsString()
  documentType?: string; // PDF, DOCX, HTML, etc.

  @ApiProperty({ description: 'The category of the document', required: false })
  @IsOptional()
  @IsString()
  category?: string; // Academic, Administrative, Financial, etc.

  @ApiProperty({ description: 'Whether the document is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The ID of the school' })
  @IsNotEmpty()
  @IsString()
  schoolId: string;

  @ApiProperty({ description: 'The ID of the template', required: false })
  @IsOptional()
  @IsString()
  templateId?: string;
}
