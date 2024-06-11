import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  listTask() {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.create(body.content);
  }

  @Get('/:id')
  async getTask(@Param('id') id: string) {
    const task = await this.taskService.findOne(parseInt(id, 10));

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  updateTask() {
    return 'This will update a task';
  }

  deleteTask() {
    return 'This will delete a task';
  }
}
