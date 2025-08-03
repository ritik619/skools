import { AcademicYear } from 'src/academic-year/entities/academic-year.entity';
import { City } from 'src/city/entities/city.entity';
import { Grade } from 'src/grade/entities/grade.entity';
import { Room } from 'src/room/entities/room.entity';
import { SchoolDocument } from 'src/school-document/entities/school-document.entity';
import { User } from 'src/user/entities/user.entity';
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
export class School {
  @PrimaryGeneratedColumn('uuid')
  schoolId: string;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  educationBoard: string;

  @Column({ nullable: true })
  principalName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  cityId: string;

  @ManyToOne(() => City, (city) => city.schools)
  city: City;
  // Add this property to the School class
  @OneToMany(() => AcademicYear, (academicYear) => academicYear.school)
  academicYears: AcademicYear[];

  // Add this property to the School class
  @OneToMany(() => Grade, (grade) => grade.school)
  grades: Grade[];
  // Add this property to the School class
  
  @OneToMany(() => SchoolDocument, (document) => document.school)
  documents: SchoolDocument[];

  @OneToMany(() => Room, (room) => room.school)
  rooms: Room[];

  // Add to School entity
  @OneToMany(() => User, (user) => user.school)
  users: User[];

  @Column()
  capacity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
