import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum, IsDateString } from 'class-validator';
import { UserTypeEnum } from 'src/user/entities/user.entity';

export class CreateUserRoleDto {
  @ApiProperty({ description: 'The ID of the user' })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({ description: 'The type of role', enum: UserTypeEnum })
  @IsNotEmpty()
  @IsEnum(UserTypeEnum)
  roleType: UserTypeEnum;

  @ApiProperty({ description: 'Whether the role is active', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ description: 'Whether this is the primary role for the user', required: false })
  @IsOptional()
  @IsBoolean()
  isPrimaryRole?: boolean;

  @ApiProperty({ description: 'The date the role becomes effective', required: false })
  @IsOptional()
  @IsDateString()
  effectiveFrom?: string;

  @ApiProperty({ description: 'The date the role expires', required: false })
  @IsOptional()
  @IsDateString()
  effectiveTo?: string;

  @ApiProperty({ description: 'The ID of the school', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;

  @ApiProperty({ description: 'The ID of the organization', required: false })
  @IsOptional()
  @IsString()
  organizationId?: string;
}
