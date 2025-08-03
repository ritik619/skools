import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './entities/user-role.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { UserRoleFilterDto } from 'src/common/dto/filter.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  async create(createUserRoleDto: CreateUserRoleDto) {
    const userRole = this.userRoleRepository.create(createUserRoleDto);
    return await this.userRoleRepository.save(userRole);
  }

  async findAll(paginationDto: PaginationDto, filters: UserRoleFilterDto): Promise<PaginationResponseDto<UserRole>> {
    const queryBuilder = this.userRoleRepository
      .createQueryBuilder('userRole')
      .leftJoinAndSelect('userRole.user', 'user')
      .leftJoinAndSelect('userRole.school', 'school');

    // Apply filters
    if (filters.userId) {
      queryBuilder.andWhere('userRole.userId = :userId', { userId: filters.userId });
    }

    if (filters.roleType) {
      queryBuilder.andWhere('userRole.roleType = :roleType', { roleType: filters.roleType });
    }

    if (filters.schoolId) {
      queryBuilder.andWhere('userRole.schoolId = :schoolId', { schoolId: filters.schoolId });
    }

    if (filters.organizationId) {
      queryBuilder.andWhere('userRole.organizationId = :organizationId', { organizationId: filters.organizationId });
    }

    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('userRole.isActive = :isActive', { isActive: filters.isActive });
    }

    if (filters.isPrimaryRole !== undefined) {
      queryBuilder.andWhere('userRole.isPrimaryRole = :isPrimaryRole', { isPrimaryRole: filters.isPrimaryRole });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findByUser(userId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<UserRole>> {
    const queryBuilder = this.userRoleRepository
      .createQueryBuilder('userRole')
      .leftJoinAndSelect('userRole.user', 'user')
      .leftJoinAndSelect('userRole.school', 'school')
      .where('userRole.userId = :userId', { userId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findBySchool(schoolId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<UserRole>> {
    const queryBuilder = this.userRoleRepository
      .createQueryBuilder('userRole')
      .leftJoinAndSelect('userRole.user', 'user')
      .leftJoinAndSelect('userRole.school', 'school')
      .where('userRole.schoolId = :schoolId', { schoolId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const userRole = await this.userRoleRepository.findOne({
      where: { userRoleId: id },
      relations: ['user', 'school'],
    });

    if (!userRole) {
      throw new NotFoundException(`UserRole with ID ${id} not found`);
    }

    return userRole;
  }

  async update(id: string, updateUserRoleDto: UpdateUserRoleDto) {
    const userRole = await this.findOne(id);
    Object.assign(userRole, updateUserRoleDto);
    return await this.userRoleRepository.save(userRole);
  }

  async remove(id: string) {
    const userRole = await this.findOne(id);
    return await this.userRoleRepository.remove(userRole);
  }
}
