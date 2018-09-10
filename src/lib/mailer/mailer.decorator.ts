import { Inject } from '@nestjs/common';

import { MailerToken } from './mailer.constant';

export const InjectMailer = () => Inject(MailerToken);
