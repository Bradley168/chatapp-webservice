import { IsNotEmpty, IsString } from 'class-validator';

export class S3Config {
  @IsNotEmpty()
  @IsString()
  S3_ACCESS_KEY_ID!: string;

  @IsNotEmpty()
  @IsString()
  S3_SECRET_ACCESS_KEY!: string;
}
