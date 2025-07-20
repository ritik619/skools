import { Injectable } from '@nestjs/common';
import { CreateDocumentTemplateDto } from './dto/create-document-template.dto';
import { UpdateDocumentTemplateDto } from './dto/update-document-template.dto';

@Injectable()
export class DocumentTemplateService {
  create(createDocumentTemplateDto: CreateDocumentTemplateDto) {
    return 'This action adds a new documentTemplate';
  }

  findAll() {
    return `This action returns all documentTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentTemplate`;
  }

  update(id: number, updateDocumentTemplateDto: UpdateDocumentTemplateDto) {
    return `This action updates a #${id} documentTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentTemplate`;
  }
}
