import * as GoogleCloudStorage from '@google-cloud/storage';
import { existsSync } from 'fs';
import { resolve } from 'path';

import { GoogleCloudStorageConfig } from './google-cloud-storage.dto';

export class GoogleCloudStorageX {
  readonly bucket: GoogleCloudStorage.Bucket;
  readonly storage: GoogleCloudStorage.Storage;

  constructor(config: GoogleCloudStorageConfig) {
    const keyFilename = resolve('.', config.GOOGLE_CLOUD_STORAGE_KEY_FILENAME_PATH);
    if (!existsSync(keyFilename)) throw new Error(`Unknown file ${keyFilename}`);

    this.storage = GoogleCloudStorage({ keyFilename });
    this.bucket = new GoogleCloudStorage.Bucket(this.storage, config.GOOGLE_CLOUD_STORAGE_BUCKET_NAME);
  }
}
