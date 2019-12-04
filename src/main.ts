import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environment';

async function bootstrap(logger: Logger): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: environment.allowedDomains });

  await app.listen(environment.port, environment.ip);

  logger.log(`Listening at ${environment.ip}:${environment.port}`);
}

bootstrap(new Logger('NestApplication'));
