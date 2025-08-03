import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty({ description: 'The name of the country' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the country' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The abbreviation of the country', required: false })
  @IsOptional()
  @IsString()
  abbreviation?: string;

  @ApiProperty({ description: 'The phone code of the country', required: false })
  @IsOptional()
  @IsString()
  phoneCode?: string;

  @ApiProperty({ description: 'The currency of the country', required: false })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiProperty({ description: 'The timezone of the country', required: false })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiProperty({ description: 'Whether the country is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
