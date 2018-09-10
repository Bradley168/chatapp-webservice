import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Max, Min } from 'class-validator';

const transformNumber = _ => (isNaN(+_) ? 0 : +_);

export class PaginationDto {
  @ApiModelPropertyOptional({ default: 10, description: 'Limit query data ' })
  @Min(0)
  @Max(100)
  @Transform(transformNumber)
  readonly limit: number = 10;

  @ApiModelPropertyOptional({ default: 0, description: 'Offset query data ' })
  @Min(0)
  @Transform(transformNumber)
  readonly offset: number = 0;
}
