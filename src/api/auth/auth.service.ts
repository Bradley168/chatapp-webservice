import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

import { ConfigService } from '../../lib/config';
import { LoginBody } from './auth.dto';
import { JWTPayload } from './auth.interfaces';


@Injectable()
export class AuthService {
  constructor(private readonly config: ConfigService) {}

  async login(body: LoginBody) {
    // TODO
  }

  createAccessToken(payload: JWTPayload): Promise<string> {
    return new Promise((resolve, reject) =>
      sign(payload, this.config.JWT_SECRET, { noTimestamp: true }, (err, token) => {
        if (err) return reject(err);
        resolve(token);
      })
    );
  }
}
