import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Response } from 'express';

@Catch(HttpException)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();
    const err = exception;

    let statusCode = typeof err.getStatus === 'function' ? err.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const response = typeof err.getResponse === 'function' ? err.getResponse() : err.message || 'Internal Server Error';

    let responseBody: any;

    // TODO: customize your own error handler
    // ======================================
    if (typeof response === 'string') {
      responseBody = { statusCode, message: response };
    } else if (typeof response.message === 'string') {
      responseBody = { statusCode, message: response.message };
    } else if (Array.isArray(response.message)) {
      statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
      responseBody = { message: 'Validation Failed.', errors: response.message.map(x => this.mapError(x, '')) };
    } else {
      responseBody = { statusCode, ...response.message };
    }

    res.status(statusCode).json(responseBody);

    if (statusCode >= 500) console.error(response, err);
    else console.log(responseBody);
  }

  private mapError(err: ValidationError, name: string) {
    const field = `${name !== '' && name !== err.property ? `${name}.` : ''}${err.property}`;
    if (err.constraints) {
      return {
        field,
        validation: Object.keys(err.constraints)[0],
        message: err.constraints[Object.keys(err.constraints)[0]].replace(err.property, field)
      };
    } else return this.mapError(err.children[0], field);
  }
}
