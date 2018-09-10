import { Inject } from '@nestjs/common';

import { MongooseToken } from './mongoose.constant';

export const InjectMongoose = () => Inject(MongooseToken);
