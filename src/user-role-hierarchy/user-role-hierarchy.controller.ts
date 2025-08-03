import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ParseUUIDPipe } from '@nestjs/common';
import { UserRoleHierarchyService } from './user-role-hierarchy.service';
import { CreateUserRoleHierarchyDto } from './dto/create-user-role-hierarchy.dto';
import { UpdateUserRoleHierarchyDto } from './dto/update-user-role-hierarchy.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('user-role-hierarchies')
@UseGuards(JwtAuthGuard)
export class UserRoleHierarchyController {
  constructor(private readonly userRoleHierarchyService: UserRoleHierarchyService) {}

  @Post()
  create(@Body() createUserRoleHierarchyDto: CreateUserRoleHierarchyDto) {
    return this.userRoleHierarchyService.create(createUserRoleHierarchyDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto, @Query() filters: any) {
    return this.userRoleHierarchyService.findAll(paginationDto, filters);
  }

  @Get('superior/:superiorRole')
  findBySuperiorRole(@Param('superiorRole') superiorRole: string, @Query() paginationDto: PaginationDto) {
    return this.userRoleHierarchyService.findBySuperiorRole(superiorRole, paginationDto);
  }

  @Get('subordinate/:subordinateRole')
  findBySubordinateRole(@Param('subordinateRole') subordinateRole: string, @Query() paginationDto: PaginationDto) {
    return this.userRoleHierarchyService.findBySubordinateRole(subordinateRole, paginationDto);
  }

  @Get('organization-level/:organizationLevel')
  findByOrganizationLevel(@Param('organizationLevel') organizationLevel: string, @Query() paginationDto: PaginationDto) {
    return this.userRoleHierarchyService.findByOrganizationLevel(organizationLevel, paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userRoleHierarchyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserRoleHierarchyDto: UpdateUserRoleHierarchyDto) {
    return this.userRoleHierarchyService.update(id, updateUserRoleHierarchyDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userRoleHierarchyService.remove(id);
  }
}
