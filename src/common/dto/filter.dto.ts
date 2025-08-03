import { IsOptional, IsString, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { UserTypeEnum } from 'src/user/entities/user.entity';
import { UserHierarchyTypeEnum } from 'src/user-relationship/entities/user-relationship.entity';

export class SchoolFilterDto {
  @IsOptional()
  @IsString()
  cityId?: string;

  @IsOptional()
  @IsString()
  stateId?: string;

  @IsOptional()
  @IsString()
  countryId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  educationBoard?: string;
}

export class UserFilterDto {
  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsEnum(UserTypeEnum)
  roleType?: UserTypeEnum;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isEmailVerified?: boolean;

  @IsOptional()
  @IsString()
  specialization?: string;
}

export class UserRoleFilterDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsEnum(UserTypeEnum)
  roleType?: UserTypeEnum;

  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsString()
  organizationId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isPrimaryRole?: boolean;
}

export class UserRelationshipFilterDto {
  @IsOptional()
  @IsString()
  superiorUserId?: string;

  @IsOptional()
  @IsString()
  subordinateUserId?: string;

  @IsOptional()
  @IsEnum(UserHierarchyTypeEnum)
  relationshipType?: UserHierarchyTypeEnum;

  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsString()
  gradeId?: string;

  @IsOptional()
  @IsString()
  sectionId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class GradeFilterDto {
  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  ageGroup?: string;
}

export class SectionFilterDto {
  @IsOptional()
  @IsString()
  gradeId?: string;

  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class RoomFilterDto {
  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsString()
  roomType?: string;

  @IsOptional()
  @IsString()
  floor?: string;

  @IsOptional()
  @IsString()
  building?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class AcademicYearFilterDto {
  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;
}

export class DocumentFilterDto {
  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  documentType?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
} 