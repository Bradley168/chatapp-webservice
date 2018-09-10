import { Inject } from '@nestjs/common';

import { S3Token } from './s3.constant';

export const InjectS3 = () => Inject(S3Token);
