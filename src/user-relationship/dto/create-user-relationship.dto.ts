import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { UserHierarchyTypeEnum } from '../entities/user-relationship.entity';

export class CreateUserRelationshipDto {
  @IsNotEmpty()
  @IsString()
  superiorUserId: string;

  @IsNotEmpty()
  @IsString()
  subordinateUserId: string;

  @IsNotEmpty()
  @IsEnum(UserHierarchyTypeEnum)
  relationshipType: UserHierarchyTypeEnum;

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

  @IsOptional()
  @IsDateString()
  effectiveFrom?: string;

  @IsOptional()
  @IsDateString()
  effectiveTo?: string;
}
