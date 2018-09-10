import { ReflectMetadata } from '@nestjs/common';

export const Auth = (...roles: ('admin' | 'supervisor' | 'editor' | 'qa')[]) => ReflectMetadata('roles', roles);
