import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEmail, IsUrl } from 'class-validator';

export class CreateOrgnaizationDto {
  @ApiProperty({ description: 'The name of the organization' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the organization' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The description of the organization', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The address of the organization', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ description: 'The phone number of the organization', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'The email of the organization', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'The website of the organization', required: false })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiProperty({ description: 'The contact person of the organization', required: false })
  @IsOptional()
  @IsString()
  contactPerson?: string;

  @ApiProperty({ description: 'The contact phone of the organization', required: false })
  @IsOptional()
  @IsString()
  contactPhone?: string;

  @ApiProperty({ description: 'The contact email of the organization', required: false })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiProperty({ description: 'Whether the organization is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
