import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { UserTypeEnum } from 'src/user/entities/user.entity';
import { UserHierarchyTypeEnum } from 'src/user-relationship/entities/user-relationship.entity';

export class CreateUserRoleHierarchyDto {
  @ApiProperty({ description: 'The role of the superior user', enum: UserTypeEnum })
  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  superiorRole: UserTypeEnum;

  @ApiProperty({ description: 'The role of the subordinate user', enum: UserTypeEnum })
  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  subordinateRole: UserTypeEnum;

  @ApiProperty({ description: 'The allowed relationship type', enum: UserHierarchyTypeEnum })
  @IsNotEmpty()
  @IsEnum(UserHierarchyTypeEnum)
  allowedRelationshipType: UserHierarchyTypeEnum;

  @ApiProperty({ description: 'Whether the hierarchy is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'The organization level of the hierarchy', required: false })
  @IsOptional()
  @IsString()
  organizationLevel?: string; // "Global", "Country", "State", "City", "School"
}

