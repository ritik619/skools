import { Test, TestingModule } from '@nestjs/testing';
import { SchoolDocumentService } from './school-document.service';

describe('SchoolDocumentService', () => {
  let service: SchoolDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolDocumentService],
    }).compile();

    service = module.get<SchoolDocumentService>(SchoolDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
