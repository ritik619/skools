import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    const country = this.countryRepository.create(createCountryDto);
    return await this.countryRepository.save(country);
  }

  async findAll(paginationDto: PaginationDto, filters: any): Promise<PaginationResponseDto<Country>> {
    const queryBuilder = this.countryRepository
      .createQueryBuilder('country')
      .leftJoinAndSelect('country.states', 'states');

    // Apply filters
    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('country.isActive = :isActive', { isActive: filters.isActive });
    }

    if (filters.currency) {
      queryBuilder.andWhere('country.currency ILIKE :currency', { currency: `%${filters.currency}%` });
    }

    if (filters.timezone) {
      queryBuilder.andWhere('country.timezone ILIKE :timezone', { timezone: `%${filters.timezone}%` });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const country = await this.countryRepository.findOne({
      where: { countryId: id },
      relations: ['states', 'states.cities'],
    });

    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }

    return country;
  }

  async update(id: string, updateCountryDto: UpdateCountryDto) {
    const country = await this.findOne(id);
    Object.assign(country, updateCountryDto);
    return await this.countryRepository.save(country);
  }

  async remove(id: string) {
    const country = await this.findOne(id);
    return await this.countryRepository.remove(country);
  }
}
