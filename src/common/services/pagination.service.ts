import { Repository, SelectQueryBuilder, ObjectLiteral } from 'typeorm';
import { PaginationDto, PaginationResponseDto } from '../dto/pagination.dto';

export class PaginationService {
  static async paginate<T extends ObjectLiteral>(
    queryBuilder: SelectQueryBuilder<T>,
    paginationDto: PaginationDto,
  ): Promise<PaginationResponseDto<T>> {
    const { page = 1, limit = 10, sortBy, sortOrder = 'ASC', search } = paginationDto;
    const skip = (page - 1) * limit;

    // Add search functionality if search term is provided
    if (search) {
      const searchableColumns = this.getSearchableColumns(queryBuilder);
      if (searchableColumns.length > 0) {
        const searchConditions = searchableColumns.map(column => 
          `${queryBuilder.alias}.${column} ILIKE :search`
        );
        queryBuilder.andWhere(`(${searchConditions.join(' OR ')})`, { search: `%${search}%` });
      }
    }

    // Add sorting
    if (sortBy) {
      queryBuilder.orderBy(`${queryBuilder.alias}.${sortBy}`, sortOrder);
    } else {
      queryBuilder.orderBy(`${queryBuilder.alias}.createdAt`, 'DESC');
    }

    // Get total count
    const total = await queryBuilder.getCount();

    // Get paginated data
    const data = await queryBuilder
      .skip(skip)
      .take(limit)
      .getMany();

    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext,
        hasPrev,
      },
    };
  }

  private static getSearchableColumns<T extends ObjectLiteral>(queryBuilder: SelectQueryBuilder<T>): string[] {
    // This is a simplified version. In a real implementation, you might want to
    // define searchable columns per entity or pass them as parameters
    return ['name', 'code', 'description'];
  }

  static buildFilterQuery<T extends ObjectLiteral>(
    queryBuilder: SelectQueryBuilder<T>,
    filters: Record<string, any>,
  ): SelectQueryBuilder<T> {
    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value !== undefined && value !== null && value !== '') {
        if (typeof value === 'boolean') {
          queryBuilder.andWhere(`${queryBuilder.alias}.${key} = :${key}`, { [key]: value });
        } else if (typeof value === 'string') {
          queryBuilder.andWhere(`${queryBuilder.alias}.${key} = :${key}`, { [key]: value });
        } else if (Array.isArray(value)) {
          queryBuilder.andWhere(`${queryBuilder.alias}.${key} IN (:...${key})`, { [key]: value });
        }
      }
    });

    return queryBuilder;
  }
} 