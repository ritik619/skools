import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateStateDto {
  @ApiProperty({ description: 'The name of the state' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the state' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The abbreviation of the state', required: false })
  @IsOptional()
  @IsString()
  abbreviation?: string;

  @ApiProperty({ description: 'Whether the state is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The ID of the country' })
  @IsNotEmpty()
  @IsString()
  countryId: string;
}
