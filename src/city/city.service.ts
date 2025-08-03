import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto) {
    const city = this.cityRepository.create(createCityDto);
    return await this.cityRepository.save(city);
  }

  async findAll(paginationDto: PaginationDto, filters: any): Promise<PaginationResponseDto<City>> {
    const queryBuilder = this.cityRepository
      .createQueryBuilder('city')
      .leftJoinAndSelect('city.state', 'state')
      .leftJoinAndSelect('state.country', 'country')
      .leftJoinAndSelect('city.schools', 'schools');

    // Apply filters
    if (filters.stateId) {
      queryBuilder.andWhere('city.stateId = :stateId', { stateId: filters.stateId });
    }

    if (filters.countryId) {
      queryBuilder.andWhere('state.countryId = :countryId', { countryId: filters.countryId });
    }

    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('city.isActive = :isActive', { isActive: filters.isActive });
    }

    if (filters.postalCode) {
      queryBuilder.andWhere('city.postalCode ILIKE :postalCode', { postalCode: `%${filters.postalCode}%` });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findByState(stateId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<City>> {
    const queryBuilder = this.cityRepository
      .createQueryBuilder('city')
      .leftJoinAndSelect('city.state', 'state')
      .leftJoinAndSelect('state.country', 'country')
      .leftJoinAndSelect('city.schools', 'schools')
      .where('city.stateId = :stateId', { stateId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const city = await this.cityRepository.findOne({
      where: { cityId: id },
      relations: ['state', 'state.country', 'schools'],
    });

    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }

    return city;
  }

  async update(id: string, updateCityDto: UpdateCityDto) {
    const city = await this.findOne(id);
    Object.assign(city, updateCityDto);
    return await this.cityRepository.save(city);
  }

  async remove(id: string) {
    const city = await this.findOne(id);
    return await this.cityRepository.remove(city);
  }
}
