import { Module } from '@nestjs/common';
import { OrgnaizationService } from './orgnaization.service';
import { OrgnaizationController } from './orgnaization.controller';

@Module({
  controllers: [OrgnaizationController],
  providers: [OrgnaizationService],
})
export class OrgnaizationModule {}
