import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { ConfigService } from '../../lib/config';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly config: ConfigService, private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    // TODO
    return true;
  }
}
