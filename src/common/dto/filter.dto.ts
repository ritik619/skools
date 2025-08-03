import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { UserTypeEnum } from 'src/user/entities/user.entity';
import { UserHierarchyTypeEnum } from 'src/user-relationship/entities/user-relationship.entity';

export class SchoolFilterDto {
  @ApiProperty({ description: 'Filter by city ID', required: false })
  @IsOptional()
  @IsString()
  cityId?: string;

  @ApiProperty({ description: 'Filter by state ID', required: false })
  @IsOptional()
  @IsString()
  stateId?: string;

  @ApiProperty({ description: 'Filter by country ID', required: false })
  @IsOptional()
  @IsString()
  countryId?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Filter by education board', required: false })
  @IsOptional()
  @IsString()
  educationBoard?: string;
}

export class UserFilterDto {
  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by user role', enum: UserTypeEnum, required: false })
  @IsOptional()
  @IsEnum(UserTypeEnum)
  roleType?: UserTypeEnum;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Filter by email verification status', required: false })
  @IsOptional()
  @IsBoolean()
  isEmailVerified?: boolean;

  @ApiProperty({ description: 'Filter by specialization', required: false })
  @IsOptional()
  @IsString()
  specialization?: string;
}

export class UserRoleFilterDto {
  @ApiProperty({ description: 'Filter by user ID', required: false })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiProperty({ description: 'Filter by user role', enum: UserTypeEnum, required: false })
  @IsOptional()
  @IsEnum(UserTypeEnum)
  roleType?: UserTypeEnum;

  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by organization ID', required: false })
  @IsOptional()
  @IsString()
  organizationId?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Filter by primary role status', required: false })
  @IsOptional()
  @IsBoolean()
  isPrimaryRole?: boolean;
}

export class UserRelationshipFilterDto {
  @ApiProperty({ description: 'Filter by superior user ID', required: false })
  @IsOptional()
  @IsString()
  superiorUserId?: string;

  @ApiProperty({ description: 'Filter by subordinate user ID', required: false })
  @IsOptional()
  @IsString()
  subordinateUserId?: string;

  @ApiProperty({ description: 'Filter by relationship type', enum: UserHierarchyTypeEnum, required: false })
  @IsOptional()
  @IsEnum(UserHierarchyTypeEnum)
  relationshipType?: UserHierarchyTypeEnum;

  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by grade ID', required: false })
  @IsOptional()
  @IsString()
  gradeId?: string;

  @ApiProperty({ description: 'Filter by section ID', required: false })
  @IsOptional()
  @IsString()
  sectionId?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class GradeFilterDto {
  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Filter by age group', required: false })
  @IsOptional()
  @IsString()
  ageGroup?: string;
}

export class SectionFilterDto {
  @ApiProperty({ description: 'Filter by grade ID', required: false })
  @IsOptional()
  @IsString()
  gradeId?: string;

  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class RoomFilterDto {
  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by room type', required: false })
  @IsOptional()
  @IsString()
  roomType?: string;

  @ApiProperty({ description: 'Filter by floor', required: false })
  @IsOptional()
  @IsString()
  floor?: string;

  @ApiProperty({ description: 'Filter by building', required: false })
  @IsOptional()
  @IsString()
  building?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class AcademicYearFilterDto {
  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Filter by current status', required: false })
  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;
}

export class DocumentFilterDto {
  @ApiProperty({ description: 'Filter by school ID', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'Filter by category', required: false })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({ description: 'Filter by document type', required: false })
  @IsOptional()
  @IsString()
  documentType?: string;

  @ApiProperty({ description: 'Filter by active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
} 