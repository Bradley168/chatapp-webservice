import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { ConfigModule } from './lib/config/config.module';
import { MailerModule } from './lib/mailer';
import { SequelizeModule } from './lib/sequelize';

@Module({
  imports: [
    ApiModule,
    ConfigModule,
    // FirebaseAdminModule,
    // GoogleCloudStorageModule,
    MailerModule,
    // MongooseModule,
    // RedisModule,
    // SocialModule,
    // SocketModule,
    // S3Module,
    SequelizeModule
  ]
})
export class ApplicationModule {}
