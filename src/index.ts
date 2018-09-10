// import 'dotenv/config';
import 'reflect-metadata';
import 'source-map-support/register';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import * as morgan from 'morgan';

import { AuthGuard } from './api/auth/auth.guard';
import { AuthModule } from './api/auth/auth.module';
import { ApplicationModule } from './app.module';
import { description } from './common/api-doc';
import { AppExceptionFilter } from './common/exceptions/app-exception-filter';
import { ConfigModule, ConfigService } from './lib/config';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  // =================================
  // configureExpressSettings
  // =================================
  // server.set('etag', false);
  // server.set('trust proxy', true);
  // server.set('x-powered-by', false);

  // =================================
  // configureExpressMiddleware
  // =================================
  app.use('/', express.static('public'));
  app.use(express.json({ limit: '5mb' }));
  app.use(morgan('dev'));
  app.enableCors({ origin: true });

  // =================================
  // configureNestGlobals
  // =================================
  const authGuard = app.select(AuthModule).get(AuthGuard);
  app.useGlobalGuards(authGuard);
  app.useGlobalFilters(new AppExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: false }));

  // =================================
  // configureNestSwagger
  // =================================
  const options = new DocumentBuilder()
    .setTitle('Nest Boilerplate Project')
    .setContactEmail('preapchanoudom@gmail.com')
    .setDescription(description)
    .setVersion('1.0')
    .addBearerAuth('Authorization', 'header')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  // =================================
  // configureNestConfig
  // =================================
  const config = app.select(ConfigModule).get(ConfigService);
  const port = config.PORT;
  await app.listen(port).then(x => console.log(`Listen on port ${port}`));

  // =================================
  // configureNestHotReload
  // =================================
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
