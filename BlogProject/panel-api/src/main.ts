import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join, resolve } from 'path';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './gurad/roles.guard';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  // app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new RolesGuard(new Reflector()));
  const config = new DocumentBuilder()
    .addBearerAuth()

    .setTitle('Panel Api')
    .setDescription('The Blog Panel API description')
    .setVersion('1.0')
    .addTag('Admins')
    .addTag('Blogs')
    .addTag('Posts')
    .addTag('Public')
    .addTag('Users')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'Admin Token')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
