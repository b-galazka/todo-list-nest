import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { TaskEntity } from './task.entity';
import { TasksService } from './tasks.service';

@Crud({
  model: {
    type: TaskEntity
  },
  query: {
    maxLimit: 100,
    limit: 25
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  },
  validation: {
    whitelist: true,
    forbidNonWhitelisted: true
  },
  routes: {
    exclude: ['replaceOneBase']
  }
})
@Controller('tasks')
export class TasksController {
  constructor(readonly service: TasksService) {}
}
