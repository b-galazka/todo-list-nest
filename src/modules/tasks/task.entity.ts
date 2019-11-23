import { CrudValidationGroups } from '@nestjsx/crud';
import { Trim } from 'class-sanitizer';
import { IsDefined, IsEnum, IsOptional, IsString, Length, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { TaskStatus } from './task-status.enum';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', width: 6, default: () => 'now(6)' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', width: 6, default: () => 'now(6)' })
  updatedAt: Date;

  @Trim()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @IsString({ always: true })
  @Length(1, 120, { always: true })
  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Trim()
  @IsDefined({ groups: [CrudValidationGroups.CREATE] })
  @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  @IsString({ always: true })
  @MinLength(1, { always: true })
  @Column({ type: 'text' })
  description: string;

  @IsOptional({ always: true })
  @IsEnum(TaskStatus, { always: true })
  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.new })
  status: TaskStatus;
}
