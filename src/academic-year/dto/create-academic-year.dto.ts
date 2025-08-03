import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateAcademicYearDto {
  @ApiProperty({ description: 'The name of the academic year' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the academic year' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The start date of the academic year' })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'The end date of the academic year' })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;

  @ApiProperty({ description: 'Whether the academic year is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Whether the academic year is current', required: false })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @ApiProperty({ description: 'The ID of the school' })
  @IsNotEmpty()
  @IsString()
  schoolId: string;
}
