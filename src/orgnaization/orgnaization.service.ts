import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrgnaizationDto } from './dto/create-orgnaization.dto';
import { UpdateOrgnaizationDto } from './dto/update-orgnaization.dto';
import { Organization } from './entities/orgnaization.entity';
import { PaginationDto, PaginationResponseDto } from 'src/common/dto/pagination.dto';
import { PaginationService } from 'src/common/services/pagination.service';

@Injectable()
export class OrgnaizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async create(createOrgnaizationDto: CreateOrgnaizationDto) {
    const organization = this.organizationRepository.create(createOrgnaizationDto);
    return await this.organizationRepository.save(organization);
  }

  async findAll(paginationDto: PaginationDto, filters: any): Promise<PaginationResponseDto<Organization>> {
    const queryBuilder = this.organizationRepository
      .createQueryBuilder('organization');

    // Apply filters
    if (filters.isActive !== undefined) {
      queryBuilder.andWhere('organization.isActive = :isActive', { isActive: filters.isActive });
    }

    if (filters.contactPerson) {
      queryBuilder.andWhere('organization.contactPerson ILIKE :contactPerson', { 
        contactPerson: `%${filters.contactPerson}%` 
      });
    }

    if (filters.contactEmail) {
      queryBuilder.andWhere('organization.contactEmail ILIKE :contactEmail', { 
        contactEmail: `%${filters.contactEmail}%` 
      });
    }

    return await PaginationService.paginate(queryBuilder, paginationDto);
  }

  async findOne(id: string) {
    const organization = await this.organizationRepository.findOne({
      where: { organizationId: id },
    });

    if (!organization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }

    return organization;
  }

  async update(id: string, updateOrgnaizationDto: UpdateOrgnaizationDto) {
    const organization = await this.findOne(id);
    Object.assign(organization, updateOrgnaizationDto);
    return await this.organizationRepository.save(organization);
  }

  async remove(id: string) {
    const organization = await this.findOne(id);
    return await this.organizationRepository.remove(organization);
  }
}
