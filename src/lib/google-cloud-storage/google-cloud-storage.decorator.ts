import { Inject } from '@nestjs/common';

import { GoogleCloudStorageToken } from './google-cloud-storage.constant';

export const InjectGoogleCloudStorage = () => Inject(GoogleCloudStorageToken);
