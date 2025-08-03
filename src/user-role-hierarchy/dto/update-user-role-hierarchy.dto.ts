import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRoleHierarchyDto } from './create-user-role-hierarchy.dto';

export class UpdateUserRoleHierarchyDto extends PartialType(CreateUserRoleHierarchyDto) {}
