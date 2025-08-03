import { Test, TestingModule } from '@nestjs/testing';
import { UserRelationshipController } from './user-relationship.controller';
import { UserRelationshipService } from './user-relationship.service';

describe('UserRelationshipController', () => {
  let controller: UserRelationshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRelationshipController],
      providers: [UserRelationshipService],
    }).compile();

    controller = module.get<UserRelationshipController>(UserRelationshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
