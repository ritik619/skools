import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber, IsEmail, IsUrl } from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty({ description: 'The name of the school' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the school' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The address of the school', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ description: 'The phone number of the school', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'The email of the school', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'The website of the school', required: false })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiProperty({ description: 'The education board of the school', required: false })
  @IsOptional()
  @IsString()
  educationBoard?: string;

  @ApiProperty({ description: 'The name of the principal', required: false })
  @IsOptional()
  @IsString()
  principalName?: string;

  @ApiProperty({ description: 'Whether the school is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The ID of the city' })
  @IsNotEmpty()
  @IsString()
  cityId: string;

  @ApiProperty({ description: 'The capacity of the school' })
  @IsNotEmpty()
  @IsNumber()
  capacity: number;
}
