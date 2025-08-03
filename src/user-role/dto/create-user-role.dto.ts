import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { UserTypeEnum } from 'src/user/entities/user.entity';

export class CreateUserRoleDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  roleType: UserTypeEnum;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isPrimaryRole?: boolean;

  @IsOptional()
  @IsDateString()
  effectiveFrom?: string;

  @IsOptional()
  @IsDateString()
  effectiveTo?: string;

  @IsOptional()
  @IsString()
  schoolId?: string;

  @IsOptional()
  @IsString()
  organizationId?: string;
}
