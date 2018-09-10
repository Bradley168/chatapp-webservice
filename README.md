<img src="doc/images/logo-small.png" alt="logo" align="right" width=100 />

# Nest Boilerplate Project

_Nest Boilerplate Project is powered by [Nest](https://nestjs.com/)_

# 📋 Introduction

Powered by Nest and Typescript, this boilerplate project will make your life a little bit easier when setup the project without worry much about architecture, routing, validation, middleware, ...etc. This boilerplate project can fully customizable to your need.

Thanks to VSCode and Typescript, we will have a fully intellisense when coding. No more magic function name appears out of nowhere, or some global function that we have no idea where it is located.

We want to hear your feedback and your suggestion on this project to make it more powerful, robust and dynamic.

# 🏁️️ Getting Started

## Prerequisite

- [Node LTS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Commands

Check your environment variables

> To set your application environment variables create a `.env` file. There is an `.env.example` file to follow.

Install dependencies

```bash
yarn install
```

Run in development environment

```bash
# running nodemon
yarn dev

# running HMR (200% faster)
yarn webpack
yarn webpack:node
```

Run in production environment

```bash
# compile typescript
yarn build

# compile and run with pm2
yarn start
```

# 📦 Architecture

- [Project Structure](#project-structure)
- [Built-in Modules](#built-in-modules)
- [How to start the project](#how-to-start-the-project)

## Project Structure

Structure your solution by self-contained components

```sh
•
├── config    # Contain any configuration from a third party library
├── public    # Contain access files via public
├── src       # Main directory that stores all the business logic
│   ├── api           # Yes, Api you know it
│   ├── assets        # Contain any files for your app. ex: email template, static data json
│   ├── common        # Contain your custom functions
│   ├── lib           # Built-In modules
│   ├── models        # Contain Sequelize models
│   ├── queries       # Contain raw sql files
│   ├── schema        # Contain Mongo schema
│   ├── app.module.ts # Contain in-app modules
│   └── index.ts      # Server configuration and startup
```

## Built-in Modules

- [Config](doc/config.md)
- [Firebase Admin](doc/firebase-admin.md)
- [Google Cloud Storage](doc/google-cloud-storage.md)
- [Mailer](doc/mailer.md)
- [Mongoose](doc/mongoose.md)
- [Redis](doc/redis.md)
- [S3](doc/s3.md)
- [Sequelize](doc/sequelize.md)
- Socket
- Authentication
- Cron Scheduler
- Multer Upload
- Social
- Excel

## How to start the project

This project will not have the feature you need or you don't need any of our features. To simply start to project, you have to take a look into some files.

### The main entry point: `index.ts`

This project is no doubt using express as a default. If you are familiar with express then you are good to go. You can set any configuration, setting, middleware, document within this file.

```ts
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  // =================================
  // configureExpressSettings
  // =================================
  app.set();

  // =================================
  // configureExpressMiddleware
  // =================================
  app.use();

  // =================================
  // configureNestGlobals
  // =================================
  app.useGlobalGuards();
  app.useGlobalFilters();
  app.useGlobalPipes();

  // =================================
  // configureNestSwagger
  // =================================
  const options = new DocumentBuilder()
    .setTitle('Nest Boilerplate Project')
    .setContactEmail('preapchanoudom@gmail.com')
    .addBearerAuth('Authorization', 'header')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
}
```

### Set your own modules: `app.module.ts`

This file controls all of your module. The required module for this file is `ApiModule` and `ConfigModule`. Uncomment the module that you need.

- `ApiModule` stores every route handlers, business logic, and task scheduler as such.
- `ConfigModule` stores and validates environment file `.env`.

```ts
import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { ConfigModule } from './lib/config/config.module';
// import { FirebaseAdminModule } from './lib/firebase-admin';
// import { GoogleCloudStorageModule } from './lib/google-cloud-storage';
// import { MailerModule } from './lib/mailer';
// import { MongooseModule } from './lib/mongoose';
// import { RedisModule } from './lib/redis';
// import { S3Module } from './lib/s3';
// import { SequelizeModule } from './lib/sequelize';
// import { SocketModule } from './lib/socket/socket.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule
    // FirebaseAdminModule,
    // GoogleCloudStorageModule,
    // MailerModule,
    // MongooseModule,
    // RedisModule,
    // SocketModule,
    // S3Module,
    // SequelizeModule
  ]
})
export class ApplicationModule {}
```
