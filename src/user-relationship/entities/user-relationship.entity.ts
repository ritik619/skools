import { Grade } from 'src/grade/entities/grade.entity';
import { School } from 'src/school/entities/school.entity';
import { Section } from 'src/section/entities/section.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

export enum UserHierarchyTypeEnum {
  REPORTS_TO = 'Reports To',
  MANAGES = 'Manages',
  SUPERVISES = 'Supervises',
  COLLABORATES_WITH = 'Collaborates With',
  PARENT_OF = 'Parent Of',
  TEACHES = 'Teaches',
  MENTORS = 'Mentors',
}

@Entity()
export class UserRelationship {
  @PrimaryGeneratedColumn('uuid')
  userRelationshipId: string;

  @Column()
  superiorUserId: string; // The user who has authority

  @Column()
  subordinateUserId: string; // The user under authority

  @Column({
    type: 'enum',
    enum: UserHierarchyTypeEnum,
  })
  relationshipType: UserHierarchyTypeEnum;

  @Column({ nullable: true })
  schoolId: string; // Scope relationship to school

  @Column({ nullable: true })
  gradeId: string; // For teacher-student relationships

  @Column({ nullable: true })
  sectionId: string; // For section-specific relationships

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'date', nullable: true })
  effectiveFrom: Date;

  @Column({ type: 'date', nullable: true })
  effectiveTo: Date;

  @ManyToOne(() => User, { nullable: false })
  superiorUser: User;

  @ManyToOne(() => User, { nullable: false })
  subordinateUser: User;

  @ManyToOne(() => School, { nullable: true })
  school: School;

  @ManyToOne(() => Grade, { nullable: true })
  grade: Grade;

  @ManyToOne(() => Section, { nullable: true })
  section: Section;

  @CreateDateColumn()
  createdAt: Date;
}
