import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRoleHierarchyService } from './user-role-hierarchy.service';
import { CreateUserRoleHierarchyDto } from './dto/create-user-role-hierarchy.dto';
import { UpdateUserRoleHierarchyDto } from './dto/update-user-role-hierarchy.dto';

@Controller('user-role-hierarchy')
export class UserRoleHierarchyController {
  constructor(private readonly userRoleHierarchyService: UserRoleHierarchyService) {}

  @Post()
  create(@Body() createUserRoleHierarchyDto: CreateUserRoleHierarchyDto) {
    return this.userRoleHierarchyService.create(createUserRoleHierarchyDto);
  }

  @Get()
  findAll() {
    return this.userRoleHierarchyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRoleHierarchyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRoleHierarchyDto: UpdateUserRoleHierarchyDto) {
    return this.userRoleHierarchyService.update(+id, updateUserRoleHierarchyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRoleHierarchyService.remove(+id);
  }
}
