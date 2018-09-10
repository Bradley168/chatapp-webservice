import * as S3 from 'aws-sdk/clients/s3';

import { ConfigService } from '../config';
import { S3Token } from './s3.constant';
import { S3Config } from './s3.dto';

export const S3Provider = {
  inject: [ConfigService],
  provide: S3Token,
  useFactory: (configService: ConfigService) => {
    const config = configService.validate('S3Module', S3Config);
    return new S3({
      accessKeyId: config.S3_ACCESS_KEY_ID,
      secretAccessKey: config.S3_SECRET_ACCESS_KEY
    });
  }
};
