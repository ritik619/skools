import { Injectable } from '@nestjs/common';
import { CreateUserRoleHierarchyDto } from './dto/create-user-role-hierarchy.dto';
import { UpdateUserRoleHierarchyDto } from './dto/update-user-role-hierarchy.dto';

@Injectable()
export class UserRoleHierarchyService {
  create(createUserRoleHierarchyDto: CreateUserRoleHierarchyDto) {
    return 'This action adds a new userRoleHierarchy';
  }

  findAll() {
    return `This action returns all userRoleHierarchy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRoleHierarchy`;
  }

  update(id: number, updateUserRoleHierarchyDto: UpdateUserRoleHierarchyDto) {
    return `This action updates a #${id} userRoleHierarchy`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRoleHierarchy`;
  }
}
