import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { School } from 'src/school/entities/school.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  roomId: string;

  @Column()
  name: string; // e.g., "Room 101", "Physics Lab", "Auditorium"

  @Column({ unique: true })
  code: string; // e.g., "R101", "PHYLAB", "AUD01"

  @Column()
  roomType: string; // "Classroom", "Laboratory", "Library", "Auditorium", "Office", Washroom

  @Column({ nullable: true })
  building: string; // "Block A", "Main Building", "Science Block"

  @Column({ nullable: true })
  floor: string; // "Ground Floor", "1st Floor", "2nd Floor"

  @Column({ nullable: true })
  capacity: number; // maximum occupancy

  @Column({ nullable: true })
  area: number; // room area in square feet/meters

  @Column({ nullable: true })
  description: string;

  // Climate Control
  @Column({ default: false })
  hasAC: boolean;

  @Column({ nullable: true })
  acCount: number;

  @Column({ nullable: true })
  fanCount: number;

  @Column({ default: false })
  hasHeater: boolean;

  // Audio Visual Equipment
  @Column({ default: false })
  hasProjector: boolean;

  @Column({ default: false })
  hasSmartBoard: boolean;

  @Column({ default: false })
  hasSpeakers: boolean;

  @Column({ default: false })
  hasMicrophone: boolean;

  @Column({ nullable: true })
  tvCount: number;

  @Column({ nullable: true })
  computerCount: number;

  // Furniture & Fixtures
  @Column({ nullable: true })
  deskCount: number;

  @Column({ nullable: true })
  chairCount: number;

  @Column({ default: false })
  hasWhiteboard: boolean;

  @Column({ default: false })
  hasBlackboard: boolean;

  @Column({ nullable: true })
  storageUnits: number;

  // Safety & Security
  @Column({ default: false })
  hasFireExtinguisher: boolean;

  @Column({ default: false })
  hasFirstAidKit: boolean;

  @Column({ default: false })
  hasCCTV: boolean;

  @Column({ default: false })
  hasEmergencyExit: boolean;

  // Utilities
  @Column({ nullable: true })
  electricalOutlets: number;

  @Column({ default: false })
  hasWiFi: boolean;

  @Column({ default: false })
  hasIntercom: boolean;

  @Column({ default: false })
  hasWaterDispenser: boolean;

  // Laboratory Specific (for science labs, computer labs)
  @Column({ nullable: true })
  labEquipment: string; // JSON string or comma-separated values

  @Column({ nullable: true })
  gasOutlets: number;

  @Column({ nullable: true })
  waterOutlets: number;

  @Column({ default: false })
  hasVentilation: boolean;

  @Column({ default: false })
  hasFumeHood: boolean;

  // Special Features
  @Column({ nullable: true })
  specialFeatures: string; // "Piano, Stage Lighting, Library Shelves"

  @Column({ nullable: true })
  maintenanceNotes: string;

  @Column({ nullable: true })
  lastMaintenanceDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isAvailable: boolean; // for booking/scheduling

  @Column()
  schoolId: string;

  @ManyToOne(() => School, (school) => school.rooms)
  school: School;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
