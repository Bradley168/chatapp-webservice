import * as _ from 'lodash';
import { Sequelize } from 'sequelize-typescript';

import * as models from '../../models';
import { ConfigService } from '../config';
import { SequelizeToken } from './sequelize.constant';
import { SequelizeConfig } from './sequelize.dto';

export const databaseProvider = {
  inject: [ConfigService],
  provide: SequelizeToken,
  useFactory: async (configService: ConfigService) => {
    const { DB_CONNECTION, DB_HOST, DB_LOGGING, DB_PASSWORD, DB_PORT, DB_SCHEMA, DB_USERNAME, DB_SOCKET_PATH } = configService.validate(
      'SequelizeModule',
      SequelizeConfig
    );

    const sequelize = new Sequelize({
      host: DB_HOST,
      port: DB_PORT,
      database: DB_SCHEMA,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      dialect: DB_CONNECTION,
      logging: DB_LOGGING ? console.log : false,
      operatorsAliases: false,
      dialectOptions: {
        socketPath: DB_SOCKET_PATH
      }
    });
    sequelize.addModels(_.map(models, x => x));
    await sequelize.sync();
    return sequelize;
  }
};
