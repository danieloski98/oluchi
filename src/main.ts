import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.use(morgan('tiny'));
  app.useStaticAssets(join(__dirname, '../static'));
  app.setBaseViewsDir(join(__dirname, '../static'));
  app.setViewEngine('hbs');
  app.enableCors();
  // swagger setup

  const options = new DocumentBuilder()
  .setTitle('AuthPass App')
  .setDescription('An app for authentication')
  .setVersion('1')
  .addTag('Auth')
  .build();

  const doc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, doc);
  await app.listen(3000);
}
bootstrap();
