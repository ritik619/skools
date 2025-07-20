import { Injectable } from '@nestjs/common';
import { CreateSchoolDocumentDto } from './dto/create-school-document.dto';
import { UpdateSchoolDocumentDto } from './dto/update-school-document.dto';

@Injectable()
export class SchoolDocumentService {
  create(createSchoolDocumentDto: CreateSchoolDocumentDto) {
    return 'This action adds a new schoolDocument';
  }

  findAll() {
    return `This action returns all schoolDocument`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolDocument`;
  }

  update(id: number, updateSchoolDocumentDto: UpdateSchoolDocumentDto) {
    return `This action updates a #${id} schoolDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolDocument`;
  }
}
