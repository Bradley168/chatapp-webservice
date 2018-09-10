import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { roleEnum, RoleType } from '../common';


@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false })
  name!: string;

  @Column({ allowNull: false, type: DataType.ENUM(roleEnum), defaultValue: roleEnum[1]})
  role!: RoleType;

  @Column age!: number;

  @Column breed!: string;
}