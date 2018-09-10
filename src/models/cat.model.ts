import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cat' })
export class Cat extends Model<Cat> {
  @Column name!: string;

  @Column age!: number;

  @Column breed!: string;
}
