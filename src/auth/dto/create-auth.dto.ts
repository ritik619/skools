import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'The username of the user' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'The password of the user', minLength: 6 })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterDto {
  @ApiProperty({ description: 'The username of the user' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'The email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user', minLength: 6 })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ description: 'The first name of the user' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'The phone number of the user', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'The ID of the school the user belongs to', required: false })
  @IsOptional()
  @IsString()
  schoolId?: string;
}

export class RefreshTokenDto {
  @ApiProperty({ description: 'The refresh token of the user' })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}

export class CreateAuthDto {
  @ApiProperty({ description: 'The ID of the user' })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({ description: 'The refresh token of the user' })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;

  @ApiProperty({ description: 'Information about the device', required: false })
  @IsOptional()
  @IsString()
  deviceInfo?: string;

  @ApiProperty({ description: 'The IP address of the user', required: false })
  @IsOptional()
  @IsString()
  ipAddress?: string;
}
