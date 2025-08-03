import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ParseUUIDPipe } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UserRoleFilterDto } from 'src/common/dto/filter.dto';

@Controller('user-roles')
@UseGuards(JwtAuthGuard)
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  create(@Body() createUserRoleDto: CreateUserRoleDto) {
    return this.userRoleService.create(createUserRoleDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto, @Query() filters: UserRoleFilterDto) {
    return this.userRoleService.findAll(paginationDto, filters);
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseUUIDPipe) userId: string, @Query() paginationDto: PaginationDto) {
    return this.userRoleService.findByUser(userId, paginationDto);
  }

  @Get('school/:schoolId')
  findBySchool(@Param('schoolId', ParseUUIDPipe) schoolId: string, @Query() paginationDto: PaginationDto) {
    return this.userRoleService.findBySchool(schoolId, paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userRoleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserRoleDto: UpdateUserRoleDto) {
    return this.userRoleService.update(id, updateUserRoleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userRoleService.remove(id);
  }
}
