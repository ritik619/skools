import { Module } from '@nestjs/common';
import { UserRoleHierarchyService } from './user-role-hierarchy.service';
import { UserRoleHierarchyController } from './user-role-hierarchy.controller';

@Module({
  controllers: [UserRoleHierarchyController],
  providers: [UserRoleHierarchyService],
})
export class UserRoleHierarchyModule {}
