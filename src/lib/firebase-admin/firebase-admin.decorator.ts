import { Inject } from '@nestjs/common';

import { FirebaseAdminToken } from './firebase-admin.constant';

export const InjectFirebaseAdmin = () => Inject(FirebaseAdminToken);
