import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User, UserTypeEnum } from 'src/user/entities/user.entity';
import { School } from 'src/school/entities/school.entity';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  userRoleId: string;

  @Column()
  userId: string;

  @Column({
    type: 'enum',
    enum: UserTypeEnum,
  })
  roleType: UserTypeEnum;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isPrimaryRole: boolean; // Main role for the user

  @Column({ type: 'date', nullable: true })
  effectiveFrom: Date;

  @Column({ type: 'date', nullable: true })
  effectiveTo: Date;

  @Column({ nullable: true })
  schoolId: string; // Role might be school-specific

  @Column({ nullable: true })
  organizationId: string; // Role might be organization-wide

  @ManyToOne(() => User, (user) => user.userRoles)
  user: User;

  @ManyToOne(() => School, { nullable: true })
  school: School;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
