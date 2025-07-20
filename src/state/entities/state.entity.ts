import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class State {
  @PrimaryGeneratedColumn('uuid')
  stateId: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  countryId: string;

  @ManyToOne(() => Country, (country) => country.states)
  country: Country;

  @OneToMany(() => City, (city) => city.state)
  cities: City[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
