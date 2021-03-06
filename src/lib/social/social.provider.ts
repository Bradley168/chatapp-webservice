import { HttpService } from '@nestjs/common';

import { ConfigService } from '../config';
import { Social } from './social';
import { SocialToken } from './social.constant';
import { SocialConfig } from './social.dto';

export const socialProvider = {
  inject: [ConfigService, HttpService],
  provide: SocialToken,
  useFactory: (configService: ConfigService, http: HttpService) => {
    const config = configService.validate('SocialModule', SocialConfig);
    return new Social(config, http);
  }
};
