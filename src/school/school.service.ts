import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

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

  async findAll() {
    return await this.schoolRepository.find({
      relations: ['city', 'city.state', 'city.state.country'],
    });
  }

  async findByCity(cityId: string) {
    return await this.schoolRepository.find({
      where: { cityId },
      relations: ['city', 'city.state', 'city.state.country'],
    });
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

  async findGrades(id: string) {
    const school = await this.schoolRepository.findOne({
      where: { schoolId: id },
      relations: ['grades'],
    });

    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }

    return school.grades;
  }

  async findRooms(id: string) {
    const school = await this.schoolRepository.findOne({
      where: { schoolId: id },
      relations: ['rooms'],
    });

    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }

    return school.rooms;
  }

  async findAcademicYears(id: string) {
    const school = await this.schoolRepository.findOne({
      where: { schoolId: id },
      relations: ['academicYears'],
    });

    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }

    return school.academicYears;
  }

  async findUsers(id: string) {
    const school = await this.schoolRepository.findOne({
      where: { schoolId: id },
      relations: ['users'],
    });

    if (!school) {
      throw new NotFoundException(`School with ID ${id} not found`);
    }

    return school.users;
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
