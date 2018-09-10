import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

import { deviceStatusEnum, DeviceStatusType } from '../common';

@Table({ tableName: 'device' })
export class Device extends Model<Device> {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false, field: 'user_id' })
  userId!: number;

  @Column({ allowNull: false })
  name!: string;

  @Column({ allowNull: false })
  token!: string;

  @Column({ allowNull: false,  type: DataType.ENUM(deviceStatusEnum), defaultValue: deviceStatusEnum[0]})
  status!:  DeviceStatusType

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt!: Date;
}
