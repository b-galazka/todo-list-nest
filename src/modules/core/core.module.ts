import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SanitizeRequestBodyPipe } from './sanitize-request-body.pipe';

@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [
    {
      provide: APP_PIPE,
      useClass: SanitizeRequestBodyPipe
    }
  ]
})
export class CoreModule {}
