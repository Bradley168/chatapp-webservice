import { Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'confirm-code'})
export class ConfirmCode extends Model<ConfirmCode> {
  @Column({ autoIncrement: true, primaryKey: true })
  id!: string;

  @Column({ allowNull: false })
  code!: string;

  @Column({ allowNull: false })
  type!: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAdd!: Date;

}