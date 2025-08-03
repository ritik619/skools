import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateDocumentTemplateDto {
  @ApiProperty({ description: 'The name of the template' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the template' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The description of the template', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The content of the template' })
  @IsNotEmpty()
  @IsString()
  templateContent: string;

  @ApiProperty({ description: 'The type of the template', required: false })
  @IsOptional()
  @IsString()
  templateType?: string; // PDF, DOCX, HTML, etc.

  @ApiProperty({ description: 'The category of the template', required: false })
  @IsOptional()
  @IsString()
  category?: string; // Academic, Administrative, Financial, etc.

  @ApiProperty({ description: 'Whether the template is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The version of the template', required: false })
  @IsOptional()
  @IsString()
  version?: string;
}
