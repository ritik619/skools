import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ParseUUIDPipe } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('schools')
@UseGuards(JwtAuthGuard)
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  findAll(@Query('cityId') cityId?: string) {
    if (cityId) {
      return this.schoolService.findByCity(cityId);
    }
    return this.schoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.schoolService.findOne(id);
  }

  @Get(':id/grades')
  findGrades(@Param('id', ParseUUIDPipe) id: string) {
    return this.schoolService.findGrades(id);
  }

  @Get(':id/rooms')
  findRooms(@Param('id', ParseUUIDPipe) id: string) {
    return this.schoolService.findRooms(id);
  }

  @Get(':id/academic-years')
  findAcademicYears(@Param('id', ParseUUIDPipe) id: string) {
    return this.schoolService.findAcademicYears(id);
  }

  @Get(':id/users')
  findUsers(@Param('id', ParseUUIDPipe) id: string) {
    return this.schoolService.findUsers(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.schoolService.remove(id);
  }
}
