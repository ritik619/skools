import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { SchoolFilterDto } from 'src/common/dto/filter.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
  ) {}

  async create(createSchoolDto: CreateSchoolDto) {
    const school = this.schoolRepository.create(createSchoolDto);
    return await this.schoolRepository.save(school);
  }

  async findAll(paginationDto: PaginationDto, filters: SchoolFilterDto): Promise<PaginationResponseDto<School>> {
    const queryBuilder = this.schoolRepository
      .createQueryBuilder('school')
      .leftJoinAndSelect('school.city', 'city')
      .leftJoinAndSelect('city.state', 'state')
      .leftJoinAndSelect('state.country', 'country');

    // Apply filters
    if (filters.cityId) {
      queryBuilder.andWhere('school.cityId = :cityId', { cityId: filters.cityId });
    }

    if (filters.stateId) {
      queryBuilder.andWhere('city.stateId = :stateId', { stateId: filters.stateId });
    }

    if (filters.countryId) {
      queryBuilder.andWhere('state.countryId = :countryId', { countryId: filters.countryId });
    }

    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('school.isActive = :isActive', { isActive: filters.isActive });
    }

    if (filters.educationBoard) {
      queryBuilder.andWhere('school.educationBoard ILIKE :educationBoard', { 
        educationBoard: `%${filters.educationBoard}%` 
      });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findByCity(cityId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<School>> {
    const queryBuilder = this.schoolRepository
      .createQueryBuilder('school')
      .leftJoinAndSelect('school.city', 'city')
      .leftJoinAndSelect('city.state', 'state')
      .leftJoinAndSelect('state.country', 'country')
      .where('school.cityId = :cityId', { cityId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const school = await this.schoolRepository.findOne({
      where: { schoolId: id },
      relations: ['city', 'city.state', 'city.state.country'],
    });

    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }

    return school;
  }

  async findGrades(id: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<any>> {
    const school = await this.findOne(id);
    
    const queryBuilder = this.schoolRepository
      .createQueryBuilder('school')
      .leftJoinAndSelect('school.grades', 'grades')
      .where('school.schoolId = :schoolId', { schoolId: id });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findRooms(id: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<any>> {
    const school = await this.findOne(id);
    
    const queryBuilder = this.schoolRepository
      .createQueryBuilder('school')
      .leftJoinAndSelect('school.rooms', 'rooms')
      .where('school.schoolId = :schoolId', { schoolId: id });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findAcademicYears(id: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<any>> {
    const school = await this.findOne(id);
    
    const queryBuilder = this.schoolRepository
      .createQueryBuilder('school')
      .leftJoinAndSelect('school.academicYears', 'academicYears')
      .where('school.schoolId = :schoolId', { schoolId: id });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findUsers(id: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<any>> {
    const school = await this.findOne(id);
    
    const queryBuilder = this.schoolRepository
      .createQueryBuilder('school')
      .leftJoinAndSelect('school.users', 'users')
      .where('school.schoolId = :schoolId', { schoolId: id });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    const school = await this.findOne(id);
    Object.assign(school, updateSchoolDto);
    return await this.schoolRepository.save(school);
  }

  async remove(id: string) {
    const school = await this.findOne(id);
    return await this.schoolRepository.remove(school);
  }
}
