import { Logger } from '@nestjs/common';
import * as redis from 'redis';

import { ConfigService } from '../config';
import { RedisClientToken } from './redis.constant';
import { RedisConfig } from './redis.dto';

const logger = new Logger('RedisModule');

export const redisProvider = {
  inject: [ConfigService],
  provide: RedisClientToken,
  useFactory: (configService: ConfigService) => {
    const config = configService.validate('RedisModule', RedisConfig);

    const redisClient = redis.createClient({
      auth_pass: config.REDIS_AUTH_PASS,
      host: config.REDIS_HOST,
      port: config.REDIS_PORT
    });
    redisClient.on('connect', () => logger.log('Connecting'));
    redisClient.on('ready', () => logger.log('Connected'));
    redisClient.on('reconnecting', () => logger.log('Reconnecting'));
    redisClient.on('end', () => logger.warn('Ended'));
    redisClient.on('error', e => logger.error(e.message, e.stack));
    return redisClient;
  }
};
