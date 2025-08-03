import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleHierarchyController } from './user-role-hierarchy.controller';
import { UserRoleHierarchyService } from './user-role-hierarchy.service';

describe('UserRoleHierarchyController', () => {
  let controller: UserRoleHierarchyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRoleHierarchyController],
      providers: [UserRoleHierarchyService],
    }).compile();

    controller = module.get<UserRoleHierarchyController>(UserRoleHierarchyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
