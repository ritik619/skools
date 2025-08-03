import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateRoomDto {
  @ApiProperty({ description: 'The name of the room' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the room' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The description of the room', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'The type of the room', required: false })
  @IsOptional()
  @IsString()
  roomType?: string; // Classroom, Lab, Library, Office, etc.

  @ApiProperty({ description: 'The capacity of the room', required: false })
  @IsOptional()
  @IsNumber()
  capacity?: number;

  @ApiProperty({ description: 'The floor of the room', required: false })
  @IsOptional()
  @IsString()
  floor?: string;

  @ApiProperty({ description: 'The building of the room', required: false })
  @IsOptional()
  @IsString()
  building?: string;

  @ApiProperty({ description: 'Whether the room is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The ID of the school' })
  @IsNotEmpty()
  @IsString()
  schoolId: string;
}
