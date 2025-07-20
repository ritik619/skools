import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolDocumentDto } from './create-school-document.dto';

export class UpdateSchoolDocumentDto extends PartialType(CreateSchoolDocumentDto) {}
