import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgnaizationService } from './orgnaization.service';
import { OrgnaizationController } from './orgnaization.controller';
import { Organization } from './entities/orgnaization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [OrgnaizationController],
  providers: [OrgnaizationService],
  exports: [OrgnaizationService],
})
export class OrgnaizationModule {}
