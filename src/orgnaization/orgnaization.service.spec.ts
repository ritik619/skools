import { Test, TestingModule } from '@nestjs/testing';
import { OrgnaizationService } from './orgnaization.service';

describe('OrgnaizationService', () => {
  let service: OrgnaizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgnaizationService],
    }).compile();

    service = module.get<OrgnaizationService>(OrgnaizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
