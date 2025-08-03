import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRelationshipService } from './user-relationship.service';
import { CreateUserRelationshipDto } from './dto/create-user-relationship.dto';
import { UpdateUserRelationshipDto } from './dto/update-user-relationship.dto';

@Controller('user-relationship')
export class UserRelationshipController {
  constructor(private readonly userRelationshipService: UserRelationshipService) {}

  @Post()
  create(@Body() createUserRelationshipDto: CreateUserRelationshipDto) {
    return this.userRelationshipService.create(createUserRelationshipDto);
  }

  @Get()
  findAll() {
    return this.userRelationshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRelationshipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRelationshipDto: UpdateUserRelationshipDto) {
    return this.userRelationshipService.update(+id, updateUserRelationshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRelationshipService.remove(+id);
  }
}
