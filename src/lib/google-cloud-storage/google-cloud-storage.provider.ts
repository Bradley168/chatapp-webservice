import { ConfigService } from '../config';
import { GoogleCloudStorageX } from './google-cloud-storage';
import { GoogleCloudStorageToken } from './google-cloud-storage.constant';
import { GoogleCloudStorageConfig } from './google-cloud-storage.dto';


export const GoogleCloudStorageProvider = {
  inject: [ConfigService],
  provide: GoogleCloudStorageToken,
  useFactory: (configService: ConfigService) => {
    const config = configService.validate('GoogleCloudStorageModule', GoogleCloudStorageConfig);

    return new GoogleCloudStorageX(config);
  }
};
