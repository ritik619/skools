import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>,
  ) {}

  async create(createStateDto: CreateStateDto) {
    const state = this.stateRepository.create(createStateDto);
    return await this.stateRepository.save(state);
  }

  async findAll(paginationDto: PaginationDto, filters: any): Promise<PaginationResponseDto<State>> {
    const queryBuilder = this.stateRepository
      .createQueryBuilder('state')
      .leftJoinAndSelect('state.country', 'country')
      .leftJoinAndSelect('state.cities', 'cities');

    // Apply filters
    if (filters.countryId) {
      queryBuilder.andWhere('state.countryId = :countryId', { countryId: filters.countryId });
    }

    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('state.isActive = :isActive', { isActive: filters.isActive });
    }

    if (filters.abbreviation) {
      queryBuilder.andWhere('state.abbreviation ILIKE :abbreviation', { abbreviation: `%${filters.abbreviation}%` });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findByCountry(countryId: string, paginationDto: PaginationDto): Promise<PaginationResponseDto<State>> {
    const queryBuilder = this.stateRepository
      .createQueryBuilder('state')
      .leftJoinAndSelect('state.country', 'country')
      .leftJoinAndSelect('state.cities', 'cities')
      .where('state.countryId = :countryId', { countryId });

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const state = await this.stateRepository.findOne({
      where: { stateId: id },
      relations: ['country', 'cities'],
    });

    if (!state) {
      throw new NotFoundException(`State with ID ${id} not found`);
    }

    return state;
  }

  async update(id: string, updateStateDto: UpdateStateDto) {
    const state = await this.findOne(id);
    Object.assign(state, updateStateDto);
    return await this.stateRepository.save(state);
  }

  async remove(id: string) {
    const state = await this.findOne(id);
    return await this.stateRepository.remove(state);
  }
}
