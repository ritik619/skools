import { Module } from '@nestjs/common';
import { UserRelationshipService } from './user-relationship.service';
import { UserRelationshipController } from './user-relationship.controller';

@Module({
  controllers: [UserRelationshipController],
  providers: [UserRelationshipService],
})
export class UserRelationshipModule {}
