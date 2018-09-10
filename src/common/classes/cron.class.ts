import { CronJob } from 'cron';

// http://bradymholt.github.io/cRonstrue/#cronstrue-demo
// https://github.com/kelektiv/node-cron
// https://cronexpressiondescriptor.azurewebsites.net/?
export class OnCronJob {
  async cronJob(cronTime: string, fn: () => void, timeZone: string = 'Asia/Bangkok', start = true) {
    return new CronJob({
      cronTime,
      onTick: fn,
      start,
      timeZone
    });
  }
}
