import { Grade } from 'src/grade/entities/grade.entity';
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

@Entity()
export class AcademicYear {
  @PrimaryGeneratedColumn('uuid')
  academicYearId: string;

  @Column()
  name: string; // e.g., "2024-2025"

  @Column()
  code: string; // e.g., "AY2024-25"

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ default: false })
  isCurrent: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  description: string;

  @Column()
  schoolId: string;

  @ManyToOne(() => School, (school) => school.academicYears)
  school: School;

  @OneToMany(() => Section, (section) => section.academicYear)
  sections: Section[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
