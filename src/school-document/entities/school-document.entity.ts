import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { School } from 'src/school/entities/school.entity';
import { DocumentTemplate } from 'src/document-template/entities/document-template.entity';

@Entity()
export class SchoolDocument {
  @PrimaryGeneratedColumn('uuid')
  schoolDocumentId: string;

  @Column()
  documentNumber: string; // unique document identifier

  @Column()
  fileName: string;

  @Column()
  filePath: string;

  @Column()
  fileType: string; // PDF, DOC, JPG, PNG

  @Column()
  fileSize: number; // in bytes

  @Column({ default: 'Pending' })
  verificationStatus: string; // "Pending", "Approved", "Rejected", "Expired"

  @Column({ nullable: true })
  verificationNotes: string;

  @Column({ nullable: true })
  verifiedBy: string;

  @Column({ nullable: true })
  verifiedAt: Date;

  @Column({ type: 'date', nullable: true })
  issueDate: Date;

  @Column({ type: 'date', nullable: true })
  expiryDate: Date;

  @Column({ nullable: true })
  issuingAuthority: string;

  @Column()
  uploadedBy: string; // userId who uploaded

  @Column({ type: 'json', nullable: true })
  metadata: any; // additional document-specific data

  @Column({ default: true })
  isActive: boolean;

  @Column()
  schoolId: string;

  @Column()
  documentTemplateId: string;

  @ManyToOne(() => School, (school) => school.documents)
  school: School;

  @ManyToOne(() => DocumentTemplate, (template) => template.schoolDocuments)
  documentTemplate: DocumentTemplate;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
