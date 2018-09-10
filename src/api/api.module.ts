import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CronModule } from './cron/cron.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [AuthModule, CronModule, SharedModule]
})
export class ApiModule {}
