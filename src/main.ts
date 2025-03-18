import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions:{
        enableImplicitConversion: true,
      }
    }
  ));

  /**
   * swagger configuration
   */
  const config = new DocumentBuilder()
  .setTitle('NestJS MasterClass - Blog app API')
  .setDescription('Use the base API URL as http://localhost:3000')
  .setTermsOfService('http://localhost:3000/service')
  .setLicense('MIT License', 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt')
  .addServer('http://localhost:3000')
  .setVersion('1.0')
  .build();
  // Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

