import { ConfigService } from '../config';
import { Mailer } from './mailer';
import { MailerToken } from './mailer.constant';
import { MailerConfig } from './mailer.dto';


export const mailerProvider = {
  inject: [ConfigService],
  provide: MailerToken,
  useFactory: (configService: ConfigService) => {
    const config = configService.validate('MailerModule', MailerConfig);
    return new Mailer(config);
  }
};
