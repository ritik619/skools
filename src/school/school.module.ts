import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { School } from './entities/school.entity';

@Module({
  imports: [TypeOrmModule.forFeature([School])],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [SchoolService],
})
export class SchoolModule {}
