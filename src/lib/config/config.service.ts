import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { resolve } from 'path';

export class ConfigService {
  private readonly envConfig: { [prop: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(resolve('.', filePath)));
  }

  get PORT(): number {
    return +this.envConfig.PORT;
  }

  get JWT_SECRET(): string {
    return this.envConfig.JWT_SECRET;
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  validate<T>(module: string, className: { new (): T }): T {
    const config = plainToClass(className as any, this.envConfig);
    const errors = validateSync(config as any, { whitelist: true, transform: true, forbidNonWhitelisted: false });
    if (errors.length > 0) {
      const err = errors[0];
      throw new Error(`${module}: env ${err.constraints[Object.keys(err.constraints)[0]]}`);
    }
    return config as any;
  }
}
