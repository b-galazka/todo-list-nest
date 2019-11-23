import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: environment.allowedDomains });

  await app.listen(environment.port, environment.ip);
}

bootstrap();
