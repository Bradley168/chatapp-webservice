import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'language' })
export class Language extends Model<Language> {
  // static $findActive(languageId?: number): Promise<Props<Language>[]> {
  //   const filterByLanguageId = languageId ? { id: languageId } : {};
  //   return this.findAll<Language>({ where: { ...filterByLanguageId, status: 'active' }, raw: true }) as any;
  // }

  @Column({ autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ allowNull: false })
  name!: string;

  @Column({ allowNull: false })
  code!: string;

  @Column({ allowNull: false, type: DataType.ENUM('active', 'inactive'), defaultValue: 'active' })
  status!: Status;

  @CreatedAt
  @Column({ field: 'created_date' })
  createdDate!: Date;

  @UpdatedAt
  @Column({ field: 'updated_date' })
  updatedDate!: Date;
}

type Status = 'active' | 'inactive';
