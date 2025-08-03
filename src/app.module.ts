import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgnaizationModule } from './orgnaization/orgnaization.module';
import { UserRoleModule } from './user-role/user-role.module';
import { UserRelationshipModule } from './user-relationship/user-relationship.module';
import { UserRoleHierarchyModule } from './user-role-hierarchy/user-role-hierarchy.module';
import { UserModule } from './user/user.module';
import { DocumentTemplateModule } from './document-template/document-template.module';
import { SchoolDocumentModule } from './school-document/school-document.module';
import { RoomModule } from './room/room.module';
import { SectionModule } from './section/section.module';
import { GradeModule } from './grade/grade.module';
import { AcademicYearModule } from './academic-year/academic-year.module';
import { SchoolModule } from './school/school.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { OrgnaizationModule } from './orgnaization/orgnaization.module';

@Module({
  imports: [OrgnaizationModule, CountryModule, CityModule, StateModule, SchoolModule, AcademicYearModule, GradeModule, SectionModule, RoomModule, SchoolDocumentModule, DocumentTemplateModule, UserModule, UserRoleHierarchyModule, UserRelationshipModule, UserRoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
