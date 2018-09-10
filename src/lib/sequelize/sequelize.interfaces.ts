import { ISequelizeConfig, /*Model*/ } from 'sequelize-typescript';

export type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

// export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export interface SequelizeModuleConfiguration {
  config: ISequelizeConfig;
  models: any[];
}

export type SequelizeProps =
  | '$add'
  | '$count'
  | '$create'
  | '$get'
  | '$has'
  | '$remove'
  | '$set'
  | 'changed'
  | 'destroy'
  | 'decrement'
  | 'equals'
  | 'get'
  | 'equalsOneOf'
  | 'getDataValue'
  | 'createdAt'
  | 'deletedAt'
  | 'increment'
  | 'isNewRecord'
  | 'Model'
  | 'previous'
  | 'reload'
  | 'restore'
  | 'save'
  | 'sequelize'
  | 'set'
  | 'setAttributes'
  | 'setDataValue'
  | 'toJSON'
  | 'update'
  | 'updateAttributes'
  | 'updatedAt'
  | 'where'
  | 'validate'
  | 'version';

// export type Props<T extends Model<T>> = Partial<Omit<T, SequelizeProps>>;
