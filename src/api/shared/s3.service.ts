import { Injectable } from '@nestjs/common';
import * as S3 from 'aws-sdk/clients/s3';

import { InjectS3 } from '../../lib/s3';

@Injectable()
export class S3Service {
  constructor(@InjectS3() private readonly s3: S3) {}

  async sampleS3() {
    const location = await this.s3.getBucketLocation().promise();
    console.log('location', location);
  }
}
