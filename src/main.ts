
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = await app.get(ConfigService);
  const port = configService.get<number>('PORT');

  // Swagger setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle(configService.get<string>('TITLE') || 'API')
    .setDescription('API documentation')
    .setVersion(configService.get<string>('VERSION') || '1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port ?? 3000);
}
bootstrap();
