import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';

export async function createSwaggerApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJS Swagger Sample')
    .setDescription('NestJS Swagger Sample App API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  return app;
}

export async function bootstrap(): Promise<void> {
  const app = await createSwaggerApp();
  await app.listen(8081);
}

bootstrap();
