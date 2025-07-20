import { Test, TestingModule } from '@nestjs/testing';
import { OrgnaizationController } from './orgnaization.controller';
import { OrgnaizationService } from './orgnaization.service';

describe('OrgnaizationController', () => {
  let controller: OrgnaizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgnaizationController],
      providers: [OrgnaizationService],
    }).compile();

    controller = module.get<OrgnaizationController>(OrgnaizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
