import { createParamDecorator } from '@nestjs/common';

export const AuthUser: any = createParamDecorator(async (args, req) => req.authUser);

export interface AuthUserX {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  group: string;
  role: string;
  isArchived: boolean;
}
