import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateGradeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsNumber()
  level: number;

  @IsOptional()
  @IsString()
  ageGroup?: string;

  @IsNotEmpty()
  @IsString()
  schoolId: string;
}
