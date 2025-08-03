import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleHierarchyService } from './user-role-hierarchy.service';
import { UserRoleHierarchyController } from './user-role-hierarchy.controller';
import { RoleHierarchyRule } from './entities/user-role-hierarchy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleHierarchyRule])],
  controllers: [UserRoleHierarchyController],
  providers: [UserRoleHierarchyService],
  exports: [UserRoleHierarchyService],
})
export class UserRoleHierarchyModule {}
