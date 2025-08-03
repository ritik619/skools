import { UserHierarchyTypeEnum } from 'src/user-relationship/entities/user-relationship.entity';
import { UserTypeEnum } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RoleHierarchyRule {
  @PrimaryGeneratedColumn('uuid')
  roleHierarchyRuleId: string;

  @Column({
    type: 'enum',
    enum: UserTypeEnum,
  })
  superiorRole: UserTypeEnum;

  @Column({
    type: 'enum',
    enum: UserTypeEnum,
  })
  subordinateRole: UserTypeEnum;

  @Column({
    type: 'enum',
    enum: UserHierarchyTypeEnum,
  })
  allowedRelationshipType: UserHierarchyTypeEnum;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  organizationLevel: string; // "Global", "Country", "State", "City", "School"

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
