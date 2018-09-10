export { PaginationDto } from './classes/pagination.class';

export { csvMulterOption } from './interceptors/csv-multer.interceptor';
export { imageMulterOption } from './interceptors/image-multer.interceptor';

export { Auth } from './decorators/auth.decorator';
export { AuthUser, AuthUserX } from './decorators/auth-user.decorator';

export type RoleType = 'admin' | 'user';
export const roleEnum = ['admin', 'user'];

export type TodoStatusType = 'todo' | 'in-progress' | 'done';
export const todoStatusEnum = ['todo', 'in-progress', 'done'];

export type DeviceStatusType = 'active' | 'inactive';
export const deviceStatusEnum = ['active', 'inactive'];