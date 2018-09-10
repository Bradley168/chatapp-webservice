import * as admin from 'firebase-admin';
import { existsSync } from 'fs';
import { resolve } from 'path';

import { ConfigService } from '../config';
import { FirebaseAdminToken } from './firebase-admin.constant';
import { FirebaseAdminConfig } from './firebase-admin.dto';

export const FirebaseAdminProvider = {
  inject: [ConfigService],
  provide: FirebaseAdminToken,
  useFactory: (configService: ConfigService) => {
    const config = configService.validate('FirebaseAdminModule', FirebaseAdminConfig);

    const path = resolve('.', config.FIREBASE_CREDENTIAL_PATH);
    if (!existsSync(path)) throw new Error(`Unknown file ${path}`);

    return admin.initializeApp({
      credential: admin.credential.cert(path),
      databaseURL: config.FIREBASE_DATABASE_URL
    });
  }
};
