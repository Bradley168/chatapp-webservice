import { Global, Module } from '@nestjs/common';

import { FirebaseAdminService } from './firebase-admin.service';
import { MailerService } from './mailer.service';
import { S3Service } from './s3.service';

@Global()
@Module({
  providers: [FirebaseAdminService, MailerService, S3Service],
  exports: [FirebaseAdminService, MailerService, S3Service]
})
export class SharedModule {}
