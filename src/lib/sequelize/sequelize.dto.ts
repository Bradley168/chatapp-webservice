import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SequelizeConfig {
  @IsNotEmpty()
  @IsString()
  DB_HOST!: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(x => +x)
  DB_PORT!: number;

  @IsNotEmpty()
  @IsString()
  DB_SCHEMA!: string;

  @IsNotEmpty()
  @IsString()
  DB_USERNAME!: string;

  @IsNotEmpty()
  @IsString()
  DB_PASSWORD!: string;

  @IsNotEmpty()
  @IsString()
  DB_CONNECTION!: string;

  @IsNotEmpty()
  @IsBoolean()
  @Transform(x => !!x)
  DB_LOGGING!: boolean;
}
