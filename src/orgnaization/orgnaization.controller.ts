import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrgnaizationService } from './orgnaization.service';
import { CreateOrgnaizationDto } from './dto/create-orgnaization.dto';
import { UpdateOrgnaizationDto } from './dto/update-orgnaization.dto';

@Controller('orgnaization')
export class OrgnaizationController {
  constructor(private readonly orgnaizationService: OrgnaizationService) {}

  @Post()
  create(@Body() createOrgnaizationDto: CreateOrgnaizationDto) {
    return this.orgnaizationService.create(createOrgnaizationDto);
  }

  @Get()
  findAll() {
    return this.orgnaizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orgnaizationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrgnaizationDto: UpdateOrgnaizationDto) {
    return this.orgnaizationService.update(+id, updateOrgnaizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orgnaizationService.remove(+id);
  }
}
