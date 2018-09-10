import { IsNotEmpty, IsString } from 'class-validator';

export class GoogleCloudStorageConfig {
  @IsNotEmpty()
  @IsString()
  GOOGLE_CLOUD_STORAGE_KEY_FILENAME_PATH!: string;

  @IsNotEmpty()
  @IsString()
  GOOGLE_CLOUD_STORAGE_BUCKET_NAME!: string;
}
