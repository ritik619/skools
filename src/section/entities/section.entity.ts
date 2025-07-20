import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Grade } from 'src/grade/entities/grade.entity';
import { AcademicYear } from 'src/academic-year/entities/academic-year.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn('uuid')
  sectionId: string;

  @Column()
  name: string; // e.g., "A", "B", "Science", "Commerce"

  @Column()
  code: string; // e.g., "SEC-A", "SCI", "COM"

  @Column({ nullable: true })
  capacity: number;

  @Column({ nullable: true })
  classTeacher: string;

  @Column({ nullable: true })
  room: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  gradeId: string;

  @Column()
  academicYearId: string;

  @ManyToOne(() => Grade, (grade) => grade.sections)
  grade: Grade;

  @ManyToOne(() => AcademicYear, (academicYear) => academicYear.sections)
  academicYear: AcademicYear;

  @Column()
  roomNo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
