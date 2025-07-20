import { Organization } from 'src/orgnaization/entities/orgnaization.entity';
import { State } from 'src/state/entities/state.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  countryId: string;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  currency: string;

  @Column({ nullable: true })
  timezone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  organizationId: string;

  @ManyToOne(() => Organization, (organization) => organization.countries)
  organization: Organization;

  @OneToMany(() => State, (state) => state.country)
  states: State[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
