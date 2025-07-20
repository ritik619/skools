import { Injectable } from '@nestjs/common';
import { CreateOrgnaizationDto } from './dto/create-orgnaization.dto';
import { UpdateOrgnaizationDto } from './dto/update-orgnaization.dto';

@Injectable()
export class OrgnaizationService {
  create(createOrgnaizationDto: CreateOrgnaizationDto) {
    return 'This action adds a new orgnaization';
  }

  findAll() {
    return `This action returns all orgnaization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orgnaization`;
  }

  update(id: number, updateOrgnaizationDto: UpdateOrgnaizationDto) {
    return `This action updates a #${id} orgnaization`;
  }

  remove(id: number) {
    return `This action removes a #${id} orgnaization`;
  }
}
