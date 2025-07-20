import { School } from 'src/school/entities/school.entity';
import { State } from 'src/state/entities/state.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  cityId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  stateId: string;

  @ManyToOne(() => State, (state) => state.cities)
  state: State;

  @OneToMany(() => School, (school) => school.city)
  schools: School[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
