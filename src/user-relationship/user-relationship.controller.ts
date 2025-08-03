import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ParseUUIDPipe } from '@nestjs/common';
import { UserRelationshipService } from './user-relationship.service';
import { CreateUserRelationshipDto } from './dto/create-user-relationship.dto';
import { UpdateUserRelationshipDto } from './dto/update-user-relationship.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UserRelationshipFilterDto } from 'src/common/dto/filter.dto';

@Controller('user-relationships')
@UseGuards(JwtAuthGuard)
export class UserRelationshipController {
  constructor(private readonly userRelationshipService: UserRelationshipService) {}

  @Post()
  create(@Body() createUserRelationshipDto: CreateUserRelationshipDto) {
    return this.userRelationshipService.create(createUserRelationshipDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto, @Query() filters: UserRelationshipFilterDto) {
    return this.userRelationshipService.findAll(paginationDto, filters);
  }

  @Get('superior/:superiorUserId')
  findBySuperiorUser(@Param('superiorUserId', ParseUUIDPipe) superiorUserId: string, @Query() paginationDto: PaginationDto) {
    return this.userRelationshipService.findBySuperiorUser(superiorUserId, paginationDto);
  }

  @Get('subordinate/:subordinateUserId')
  findBySubordinateUser(@Param('subordinateUserId', ParseUUIDPipe) subordinateUserId: string, @Query() paginationDto: PaginationDto) {
    return this.userRelationshipService.findBySubordinateUser(subordinateUserId, paginationDto);
  }

  @Get('school/:schoolId')
  findBySchool(@Param('schoolId', ParseUUIDPipe) schoolId: string, @Query() paginationDto: PaginationDto) {
    return this.userRelationshipService.findBySchool(schoolId, paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userRelationshipService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserRelationshipDto: UpdateUserRelationshipDto) {
    return this.userRelationshipService.update(id, updateUserRelationshipDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userRelationshipService.remove(id);
  }
}
