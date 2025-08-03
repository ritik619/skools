import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateSectionDto {
  @ApiProperty({ description: 'The name of the section' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the section' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The description of the section', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The capacity of the section', required: false })
  @IsOptional()
  @IsNumber()
  capacity?: number;

  @ApiProperty({ description: 'Whether the section is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The ID of the grade' })
  @IsNotEmpty()
  @IsString()
  gradeId: string;
}
