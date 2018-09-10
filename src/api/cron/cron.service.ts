import { Injectable } from '@nestjs/common';

import { OnCronJob } from '../../common/classes/cron.class';

@Injectable()
export class CronService extends OnCronJob {
  constructor() {
    super();
    this.cronJob('*/5 * * * *', () => console.log('loading every 5 minute.')); // Every 5 minutes
  }
}
