import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginBody {
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  readonly username!: string;

  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  readonly password!: string;
}
