import { Module } from '@nestjs/common';

import { CoreModule } from './modules/core/core.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [CoreModule, TasksModule]
})
export class AppModule {}
