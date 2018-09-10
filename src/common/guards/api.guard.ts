import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import { promisify } from 'util';

import { ConfigService } from '../../lib/config';

@Injectable()
export class ApiGuard implements CanActivate {
  // private logger = new Logger('AuthGuard');

  constructor(private readonly config: ConfigService) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<Request>();
    const key = req.get('x-api-key') || '';

    // TODO: Customize your own logic
    return this.checkScheme(key);
  }

  async checkScheme(key: string) {
    if (!key) throw new UnauthorizedException('Authorization token is missing.');
    const decoded: any = await promisify(verify)(key, this.config.JWT_SECRET).catch(e => {
      throw new UnauthorizedException(e.name + ' ' + e.message);
    });
    const XKey = decoded as string;
    if (XKey !== 'something') throw new ForbiddenException('Invalid API Key');
    return true;
  }
}
