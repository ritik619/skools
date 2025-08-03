import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { UserHierarchyTypeEnum } from '../entities/user-relationship.entity';

export class CreateUserRelationshipDto {
  @ApiProperty({ description: 'The ID of the superior user' })
  @IsNotEmpty()
  @IsString()
  superiorUserId: string;

  @ApiProperty({ description: 'The ID of the subordinate user' })
  @IsNotEmpty()
  @IsString()
  subordinateUserId: string;

  @ApiProperty({ description: 'The type of relationship', enum: UserHierarchyTypeEnum })
  @IsNotEmpty()
  @IsEnum(UserHierarchyTypeEnum)
  relationshipType: UserHierarchyTypeEnum;

  @ApiProperty({ description: 'The ID of the school', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'The ID of the grade', required: false })
  @IsOptional()
  @IsString()
  gradeId?: string;

  @ApiProperty({ description: 'The ID of the section', required: false })
  @IsOptional()
  @IsString()
  sectionId?: string;

  @ApiProperty({ description: 'Whether the relationship is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The date the relationship becomes effective', required: false })
  @IsOptional()
  @IsDateString()
  effectiveFrom?: string;

  @ApiProperty({ description: 'The date the relationship expires', required: false })
  @IsOptional()
  @IsDateString()
  effectiveTo?: string;
}
