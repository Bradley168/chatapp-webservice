import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

  async canActivate(context: ExecutionContext) {
    // TODO
    return true;
  }
}
