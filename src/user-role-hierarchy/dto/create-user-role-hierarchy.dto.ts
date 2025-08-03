import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { UserTypeEnum } from 'src/user/entities/user.entity';
import { UserHierarchyTypeEnum } from 'src/user-relationship/entities/user-relationship.entity';

export class CreateUserRoleHierarchyDto {
  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  superiorRole: UserTypeEnum;

  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  subordinateRole: UserTypeEnum;

  @IsNotEmpty()
  @IsEnum(UserHierarchyTypeEnum)
  allowedRelationshipType: UserHierarchyTypeEnum;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  organizationLevel?: string; // "Global", "Country", "State", "City", "School"
}
