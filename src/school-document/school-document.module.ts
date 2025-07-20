import { Module } from '@nestjs/common';
import { SchoolDocumentService } from './school-document.service';
import { SchoolDocumentController } from './school-document.controller';

@Module({
  controllers: [SchoolDocumentController],
  providers: [SchoolDocumentService],
})
export class SchoolDocumentModule {}
