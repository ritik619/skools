import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { GradeFilterDto } from 'src/common/dto/filter.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grade)
    private gradeRepository: Repository<Grade>,
  ) {}

  async create(createGradeDto: CreateGradeDto) {
    const grade = this.gradeRepository.create(createGradeDto);
    return await this.gradeRepository.save(grade);
  }

  async findAll(paginationDto: PaginationDto, filters: GradeFilterDto): Promise<PaginationResponseDto<Grade>> {
    const queryBuilder = this.gradeRepository
      .createQueryBuilder('grade')
      .leftJoinAndSelect('grade.school', 'school')
      .leftJoinAndSelect('grade.sections', 'sections');

    // Apply filters
    if (filters.schoolId) {
      queryBuilder.andWhere('grade.schoolId = :schoolId', { schoolId: filters.schoolId });
    }

    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('grade.isActive = :isActive', { isActive: filters.isActive });
    }

    if (filters.ageGroup) {
      queryBuilder.andWhere('grade.ageGroup ILIKE :ageGroup', { ageGroup: `%${filters.ageGroup}%` });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findBySchool(schoolId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<Grade>> {
    const queryBuilder = this.gradeRepository
      .createQueryBuilder('grade')
      .leftJoinAndSelect('grade.school', 'school')
      .leftJoinAndSelect('grade.sections', 'sections')
      .where('grade.schoolId = :schoolId', { schoolId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const grade = await this.gradeRepository.findOne({
      where: { gradeId: id },
      relations: ['school', 'sections'],
    });

    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }

    return grade;
  }

  async update(id: string, updateGradeDto: UpdateGradeDto) {
    const grade = await this.findOne(id);
    Object.assign(grade, updateGradeDto);
    return await this.gradeRepository.save(grade);
  }

  async remove(id: string) {
    const grade = await this.findOne(id);
    return await this.gradeRepository.remove(grade);
  }
}
