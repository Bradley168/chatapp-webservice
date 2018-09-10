import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

import { roleEnum, RoleType } from '../common';

@Table({ tableName: 'user' })
export class User extends Model<User> {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false, field: 'first_name' })
  firstName!: string;

  @Column({ allowNull: false, field: 'last_name' })
  lastName!: string;

  @Column({ allowNull: true })
  phone!: string;

  @Column({ allowNull: false })
  email!: string;

  @Column({ allowNull: false })
  password!: string;

  @Column({ allowNull: false, type: DataType.ENUM(roleEnum), defaultValue: roleEnum[1] })
  role!: RoleType;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt!: Date;
}
