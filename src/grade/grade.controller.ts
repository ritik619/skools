import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { GradeFilterDto } from 'src/common/dto/filter.dto';

@Controller('grades')
@UseGuards(JwtAuthGuard)
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradeService.create(createGradeDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto, @Query() filters: GradeFilterDto) {
    return this.gradeService.findAll(paginationDto, filters);
  }

  @Get('school/:schoolId')
  findBySchool(@Param('schoolId', ParseUUIDPipe) schoolId: string, @Query() paginationDto: PaginationDto) {
    return this.gradeService.findBySchool(schoolId, paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.gradeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateGradeDto: UpdateGradeDto) {
    return this.gradeService.update(id, updateGradeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.gradeService.remove(id);
  }
}
