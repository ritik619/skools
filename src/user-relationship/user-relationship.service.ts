import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRelationshipDto } from './dto/create-user-relationship.dto';
import { UpdateUserRelationshipDto } from './dto/update-user-relationship.dto';
import { UserRelationship } from './entities/user-relationship.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { UserRelationshipFilterDto } from 'src/common/dto/filter.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class UserRelationshipService {
  constructor(
    @InjectRepository(UserRelationship)
    private userRelationshipRepository: Repository<UserRelationship>,
  ) {}

  async create(createUserRelationshipDto: CreateUserRelationshipDto) {
    const userRelationship = this.userRelationshipRepository.create(createUserRelationshipDto);
    return await this.userRelationshipRepository.save(userRelationship);
  }

  async findAll(paginationDto: PaginationDto, filters: UserRelationshipFilterDto): Promise<PaginationResponseDto<UserRelationship>> {
    const queryBuilder = this.userRelationshipRepository
      .createQueryBuilder('userRelationship')
      .leftJoinAndSelect('userRelationship.superiorUser', 'superiorUser')
      .leftJoinAndSelect('userRelationship.subordinateUser', 'subordinateUser')
      .leftJoinAndSelect('userRelationship.school', 'school')
      .leftJoinAndSelect('userRelationship.grade', 'grade')
      .leftJoinAndSelect('userRelationship.section', 'section');

    // Apply filters
    if (filters.superiorUserId) {
      queryBuilder.andWhere('userRelationship.superiorUserId = :superiorUserId', { superiorUserId: filters.superiorUserId });
    }

    if (filters.subordinateUserId) {
      queryBuilder.andWhere('userRelationship.subordinateUserId = :subordinateUserId', { subordinateUserId: filters.subordinateUserId });
    }

    if (filters.relationshipType) {
      queryBuilder.andWhere('userRelationship.relationshipType = :relationshipType', { relationshipType: filters.relationshipType });
    }

    if (filters.schoolId) {
      queryBuilder.andWhere('userRelationship.schoolId = :schoolId', { schoolId: filters.schoolId });
    }

    if (filters.gradeId) {
      queryBuilder.andWhere('userRelationship.gradeId = :gradeId', { gradeId: filters.gradeId });
    }

    if (filters.sectionId) {
      queryBuilder.andWhere('userRelationship.sectionId = :sectionId', { sectionId: filters.sectionId });
    }

    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('userRelationship.isActive = :isActive', { isActive: filters.isActive });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findBySuperiorUser(superiorUserId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<UserRelationship>> {
    const queryBuilder = this.userRelationshipRepository
      .createQueryBuilder('userRelationship')
      .leftJoinAndSelect('userRelationship.superiorUser', 'superiorUser')
      .leftJoinAndSelect('userRelationship.subordinateUser', 'subordinateUser')
      .leftJoinAndSelect('userRelationship.school', 'school')
      .where('userRelationship.superiorUserId = :superiorUserId', { superiorUserId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findBySubordinateUser(subordinateUserId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<UserRelationship>> {
    const queryBuilder = this.userRelationshipRepository
      .createQueryBuilder('userRelationship')
      .leftJoinAndSelect('userRelationship.superiorUser', 'superiorUser')
      .leftJoinAndSelect('userRelationship.subordinateUser', 'subordinateUser')
      .leftJoinAndSelect('userRelationship.school', 'school')
      .where('userRelationship.subordinateUserId = :subordinateUserId', { subordinateUserId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findBySchool(schoolId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<UserRelationship>> {
    const queryBuilder = this.userRelationshipRepository
      .createQueryBuilder('userRelationship')
      .leftJoinAndSelect('userRelationship.superiorUser', 'superiorUser')
      .leftJoinAndSelect('userRelationship.subordinateUser', 'subordinateUser')
      .leftJoinAndSelect('userRelationship.school', 'school')
      .where('userRelationship.schoolId = :schoolId', { schoolId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const userRelationship = await this.userRelationshipRepository.findOne({
      where: { userRelationshipId: id },
      relations: ['superiorUser', 'subordinateUser', 'school', 'grade', 'section'],
    });

    if (!userRelationship) {
      throw new NotFoundException(`UserRelationship with ID ${id} not found`);
    }

    return userRelationship;
  }

  async update(id: string, updateUserRelationshipDto: UpdateUserRelationshipDto) {
    const userRelationship = await this.findOne(id);
    Object.assign(userRelationship, updateUserRelationshipDto);
    return await this.userRelationshipRepository.save(userRelationship);
  }

  async remove(id: string) {
    const userRelationship = await this.findOne(id);
    return await this.userRelationshipRepository.remove(userRelationship);
  }
}
