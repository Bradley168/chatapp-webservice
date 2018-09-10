import { Inject } from '@nestjs/common';
import { SocialToken } from './social.constant';

export const InjectSocial = () => Inject(SocialToken);
