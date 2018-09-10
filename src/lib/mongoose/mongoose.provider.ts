import { Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';

import { ConfigService } from '../config';
import { MongooseToken } from './mongoose.constant';
import { MongooseConfig } from './mongoose.dto';

const logger = new Logger('MongooseModule');

export const mongooseProvider = {
  inject: [ConfigService],
  provide: MongooseToken,
  useFactory: async (configService: ConfigService) => {
    const { MONGO_URI } = configService.validate('MongooseModule', MongooseConfig);
    await mongoose.connect(MONGO_URI);
    logger.log(mongoose.connection.readyState === 1 ? 'connected' : 'not connected');
  }
};
