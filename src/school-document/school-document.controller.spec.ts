import { Test, TestingModule } from '@nestjs/testing';
import { SchoolDocumentController } from './school-document.controller';
import { SchoolDocumentService } from './school-document.service';

describe('SchoolDocumentController', () => {
  let controller: SchoolDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolDocumentController],
      providers: [SchoolDocumentService],
    }).compile();

    controller = module.get<SchoolDocumentController>(SchoolDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
