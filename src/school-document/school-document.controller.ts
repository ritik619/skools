import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolDocumentService } from './school-document.service';
import { CreateSchoolDocumentDto } from './dto/create-school-document.dto';
import { UpdateSchoolDocumentDto } from './dto/update-school-document.dto';

@Controller('school-document')
export class SchoolDocumentController {
  constructor(private readonly schoolDocumentService: SchoolDocumentService) {}

  @Post()
  create(@Body() createSchoolDocumentDto: CreateSchoolDocumentDto) {
    return this.schoolDocumentService.create(createSchoolDocumentDto);
  }

  @Get()
  findAll() {
    return this.schoolDocumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolDocumentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDocumentDto: UpdateSchoolDocumentDto) {
    return this.schoolDocumentService.update(+id, updateSchoolDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolDocumentService.remove(+id);
  }
}
