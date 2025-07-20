import { AcademicYear } from 'src/academic-year/entities/academic-year.entity';
import { School } from 'src/school/entities/school.entity';
import { Section } from 'src/section/entities/section.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

// Independent Grade Entity
@Entity()
export class Grade {
  @PrimaryGeneratedColumn('uuid')
  gradeId: string;

  @Column()
  name: string; // "Grade 1", "Class 10"

  @Column()
  code: string; // "GR01", "CL10"

  @Column()
  level: number; // 1, 2, 3...

  @Column({ nullable: true })
  ageGroup: string;

  @Column()
  schoolId: string;

  @ManyToOne(() => School, (school) => school.grades)
  school: School;

  // Add this to the Grade entity
  @OneToMany(() => Section, (section) => section.grade)
  sections: Section[];
}
