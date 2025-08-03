import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateCityDto {
  @ApiProperty({ description: 'The name of the city' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The postal code of the city', required: false })
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiProperty({ description: 'Whether the city is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The ID of the state' })
  @IsNotEmpty()
  @IsString()
  stateId: string;
}
