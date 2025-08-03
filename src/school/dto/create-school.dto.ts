import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber, IsEmail, IsUrl } from 'class-validator';

export class CreateSchoolDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsOptional()
  @IsString()
  educationBoard?: string;

  @IsOptional()
  @IsString()
  principalName?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsNotEmpty()
  @IsString()
  cityId: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;
}
