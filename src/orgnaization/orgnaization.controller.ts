import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ParseUUIDPipe } from '@nestjs/common';
import { OrgnaizationService } from './orgnaization.service';
import { CreateOrgnaizationDto } from './dto/create-orgnaization.dto';
import { UpdateOrgnaizationDto } from './dto/update-orgnaization.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('organizations')
@UseGuards(JwtAuthGuard)
export class OrgnaizationController {
  constructor(private readonly orgnaizationService: OrgnaizationService) {}

  @Post()
  create(@Body() createOrgnaizationDto: CreateOrgnaizationDto) {
    return this.orgnaizationService.create(createOrgnaizationDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto, @Query() filters: any) {
    return this.orgnaizationService.findAll(paginationDto, filters);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.orgnaizationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateOrgnaizationDto: UpdateOrgnaizationDto) {
    return this.orgnaizationService.update(id, updateOrgnaizationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.orgnaizationService.remove(id);
  }
}
