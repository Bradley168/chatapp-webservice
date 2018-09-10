import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

import { todoStatusEnum, TodoStatusType } from '../common';

@Table({ tableName: 'todo' })
export class Todo extends Model<Todo> {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false })
  userId!: number;

  @Column({ allowNull: false })
  description!: string;

  @Column({ allowNull: false, field: 'due_date' })
  dueDate!: Date;

  @Column({ allowNull: false, type: DataType.ENUM(todoStatusEnum), defaultValue: todoStatusEnum[0] })
  status!: TodoStatusType;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt!: Date;
}