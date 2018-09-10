import { Inject } from '@nestjs/common';

import { RedisClientToken } from './redis.constant';

export const InjectRedisClient = () => Inject(RedisClientToken);
