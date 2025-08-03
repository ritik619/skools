import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { School } from 'src/school/entities/school.entity';
import { UserRole } from 'src/user-role/entities/user-role.entity';

export enum UserTypeEnum {
  // Global Level
  SUPER_ADMIN = 'Super Admin',
  PLATFORM_ADMIN = 'Platform Admin',

  // Organization Level
  ORGANIZATION_HEAD = 'Organization Head',
  ORGANIZATION_ADMIN = 'Organization Admin',
  ORGANIZATION_MANAGER = 'Organization Manager',

  // Country Level
  COUNTRY_HEAD = 'Country Head',
  COUNTRY_MANAGER = 'Country Manager',

  // State Level
  STATE_HEAD = 'State Head',
  STATE_COORDINATOR = 'State Coordinator',

  // City Level
  CITY_HEAD = 'City Head',
  CITY_COORDINATOR = 'City Coordinator',

  // School/Campus Level
  SCHOOL_ADMIN = 'School Admin',
  PRINCIPAL = 'Principal',
  VICE_PRINCIPAL = 'Vice Principal',
  HEAD_OF_DEPARTMENT = 'Head of Department',

  // Academic Staff
  TEACHER = 'Teacher',
  SUBSTITUTE_TEACHER = 'Substitute Teacher',
  CLASS_TEACHER = 'Class Teacher',
  SUBJECT_COORDINATOR = 'Subject Coordinator',

  // Administrative Staff
  ACADEMIC_COORDINATOR = 'Academic Coordinator',
  ADMISSION_OFFICER = 'Admission Officer',
  EXAM_CONTROLLER = 'Exam Controller',
  REGISTRAR = 'Registrar',

  // Support Staff
  ACCOUNTANT = 'Accountant',
  FINANCE_MANAGER = 'Finance Manager',
  LIBRARIAN = 'Librarian',
  LAB_ASSISTANT = 'Lab Assistant',
  COUNSELOR = 'Counselor',
  SECURITY_OFFICER = 'Security Officer',
  RECEPTIONIST = 'Receptionist',
  MAINTENANCE_STAFF = 'Maintenance Staff',

  //Medical Staff
  DOCTOR = 'Doctor',
  NURSE = 'Nurse',

  // Specialized Roles
  HOSTEL_WARDEN = 'Hostel Warden',
  TRANSPORT_COORDINATOR = 'Transport Coordinator',
  SPORTS_COORDINATOR = 'Sports Coordinator',
  EVENT_COORDINATOR = 'Event Coordinator',
  IT_ADMINISTRATOR = 'IT Administrator',

  // Student & Parent
  STUDENT = 'Student',
  PARENT = 'Parent',
  GUARDIAN = 'Guardian',

  // External Stakeholders
  ALUMNI = 'Alumni',
  VENDOR = 'Vendor',
  BOARD_MEMBER = 'Board Member',

  // Governance & Compliance
  BOARD_SECRETARY = 'Board Secretary',
  GOVERNANCE_COORDINATOR = 'Governance Coordinator',
}

export enum UserStatusEnum {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  SUSPENDED = 'Suspended',
  PENDING_VERIFICATION = 'Pending Verification',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Add relationship to UserRole
  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];

  @Column({
    type: 'enum',
    enum: UserStatusEnum,
    default: UserStatusEnum.PENDING_VERIFICATION,
  })
  status: UserStatusEnum;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ default: false })
  isPhoneVerified: boolean;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ nullable: true })
  passwordResetExpires: Date;

  @Column({ nullable: true })
  lastLogin: Date;

  @Column({ nullable: true })
  lastLoginIP: string;

  @Column({ type: 'json', nullable: true })
  preferences: any; // theme, language, notification settings

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  schoolId: string; // null for organization-level users

  @ManyToOne(() => School, (school) => school.users, { nullable: true })
  school: School;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  specialization: string; // "Mathematics", "Sports", "Music", "Drama", "Art"

  //@Column({ nullable: true })
  //teachingSubjects: string; // JSON array of subjects they teach

  @Column({ nullable: true })
  additionalRoles: string; // JSON array like ["Sports Coach", "Drama Director"]
}
