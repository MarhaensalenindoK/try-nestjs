import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepo: TasksRepository) {}

  findAll() {
    return this.tasksRepo.findAll();
  }

  findOne(id: number) {
    console.log(id);
    return this.tasksRepo.findOne(id);
  }

  async create(task: string) {
    return this.tasksRepo.create(task);
  }
}
