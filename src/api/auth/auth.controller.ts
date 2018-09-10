import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { LoginBody } from './auth.dto';
import { AuthService } from './auth.service';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  @ApiOperation({ title: 'Login' })
  login(@Body() body: LoginBody) {
    return this.service.login(body);
  }
}
