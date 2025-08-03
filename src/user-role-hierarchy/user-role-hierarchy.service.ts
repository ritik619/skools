import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRoleHierarchyDto } from './dto/create-user-role-hierarchy.dto';
import { UpdateUserRoleHierarchyDto } from './dto/update-user-role-hierarchy.dto';
import { RoleHierarchyRule } from './entities/user-role-hierarchy.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class UserRoleHierarchyService {
  constructor(
    @InjectRepository(RoleHierarchyRule)
    private roleHierarchyRepository: Repository<RoleHierarchyRule>,
  ) {}

  async create(createUserRoleHierarchyDto: CreateUserRoleHierarchyDto) {
    const roleHierarchy = this.roleHierarchyRepository.create(createUserRoleHierarchyDto);
    return await this.roleHierarchyRepository.save(roleHierarchy);
  }

  async findAll(paginationDto: PaginationDto, filters: any): Promise<PaginationResponseDto<RoleHierarchyRule>> {
    const queryBuilder = this.roleHierarchyRepository
      .createQueryBuilder('roleHierarchy');

    // Apply filters
    if (filters.superiorRole) {
      queryBuilder.andWhere('roleHierarchy.superiorRole = :superiorRole', { superiorRole: filters.superiorRole });
    }

    if (filters.subordinateRole) {
      queryBuilder.andWhere('roleHierarchy.subordinateRole = :subordinateRole', { subordinateRole: filters.subordinateRole });
    }

    if (filters.allowedRelationshipType) {
      queryBuilder.andWhere('roleHierarchy.allowedRelationshipType = :allowedRelationshipType', { 
        allowedRelationshipType: filters.allowedRelationshipType 
      });
    }

    if (filters.organizationLevel) {
      queryBuilder.andWhere('roleHierarchy.organizationLevel = :organizationLevel', { 
        organizationLevel: filters.organizationLevel 
      });
    }

    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('roleHierarchy.isActive = :isActive', { isActive: filters.isActive });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findBySuperiorRole(superiorRole: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<RoleHierarchyRule>> {
    const queryBuilder = this.roleHierarchyRepository
      .createQueryBuilder('roleHierarchy')
      .where('roleHierarchy.superiorRole = :superiorRole', { superiorRole });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findBySubordinateRole(subordinateRole: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<RoleHierarchyRule>> {
    const queryBuilder = this.roleHierarchyRepository
      .createQueryBuilder('roleHierarchy')
      .where('roleHierarchy.subordinateRole = :subordinateRole', { subordinateRole });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findByOrganizationLevel(organizationLevel: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<RoleHierarchyRule>> {
    const queryBuilder = this.roleHierarchyRepository
      .createQueryBuilder('roleHierarchy')
      .where('roleHierarchy.organizationLevel = :organizationLevel', { organizationLevel });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const roleHierarchy = await this.roleHierarchyRepository.findOne({
      where: { roleHierarchyRuleId: id },
    });

    if (!roleHierarchy) {
      throw new NotFoundException(`RoleHierarchyRule with ID ${id} not found`);
    }

    return roleHierarchy;
  }

  async update(id: string, updateUserRoleHierarchyDto: UpdateUserRoleHierarchyDto) {
    const roleHierarchy = await this.findOne(id);
    Object.assign(roleHierarchy, updateUserRoleHierarchyDto);
    return await this.roleHierarchyRepository.save(roleHierarchy);
  }

  async remove(id: string) {
    const roleHierarchy = await this.findOne(id);
    return await this.roleHierarchyRepository.remove(roleHierarchy);
  }
}
