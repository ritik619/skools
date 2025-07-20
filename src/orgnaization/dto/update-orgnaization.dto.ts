import { PartialType } from '@nestjs/mapped-types';
import { CreateOrgnaizationDto } from './create-orgnaization.dto';

export class UpdateOrgnaizationDto extends PartialType(CreateOrgnaizationDto) {}
