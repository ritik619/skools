import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleHierarchyService } from './user-role-hierarchy.service';

describe('UserRoleHierarchyService', () => {
  let service: UserRoleHierarchyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRoleHierarchyService],
    }).compile();

    service = module.get<UserRoleHierarchyService>(UserRoleHierarchyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
