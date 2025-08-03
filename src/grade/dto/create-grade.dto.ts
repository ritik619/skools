import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateGradeDto {
  @ApiProperty({ description: 'The name of the grade' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the grade' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The level of the grade' })
  @IsNotEmpty()
  @IsNumber()
  level: number;

  @ApiProperty({ description: 'The age group of the grade', required: false })
  @IsOptional()
  @IsString()
  ageGroup?: string;

  @ApiProperty({ description: 'The ID of the school' })
  @IsNotEmpty()
  @IsString()
  schoolId: string;
}
