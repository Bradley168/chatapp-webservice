import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { ConfigModule } from './lib/config/config.module';
import { FirebaseAdminModule } from './lib/firebase-admin';
import { MailerModule } from './lib/mailer';
import { SequelizeModule } from './lib/sequelize';
import { SocialModule } from './lib/social';
import { SocketModule } from './lib/socket/socket.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule,
    FirebaseAdminModule,
    // GoogleCloudStorageModule,
    MailerModule,
    // MongooseModule,
    // RedisModule,
    SocialModule,
    SocketModule,
    // S3Module,
    SequelizeModule
  ]
})
export class ApplicationModule {}
