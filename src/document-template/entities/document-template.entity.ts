import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum DocumentCategory {
  LEGAL = 'Legal',
  ACADEMIC = 'Academic',
  INFRASTRUCTURE = 'Infrastructure',
  FINANCIAL = 'Financial',
  STUDENT_RECORDS = 'Student Records',
  STAFF_RECORDS = 'Staff Records',
}

@Entity()
export class DocumentTemplate {
  @PrimaryGeneratedColumn('uuid')
  documentTemplateId: string;

  @Column()
  name: string; // "School License", "Bonafide Certificate", "ID Card", "Transfer Certificate"

  @Column({ unique: true })
  code: string; // "SCH_LIC", "BONAFIDE", "ID_CARD", "TC"

  @Column({ nullable: true })
  description: string;

  @Column()
  applicableFor: string; // "School", "Student", "Teacher", "Staff"

  @Column()
  documentType: string; // "Generated", "Upload", "Both"

  @Column({ nullable: true })
  template: string; // HTML template for generated documents

  @Column({ type: 'json', nullable: true })
  requiredFields: string[]; // Fields needed to generate document

  @Column({ nullable: true })
  validityPeriod: number; // in days

  @Column({ default: false })
  isRequired: boolean; // Required for school onboarding

  @Column({ nullable: true })
  countryCode: string; // Country-specific documents

  @Column({ nullable: true })
  educationSystem: string; // CBSE, ICSE, British, etc.

  @Column({ default: true })
  isActive: boolean;

  @Column()
  documentCategory: DocumentCategory;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
