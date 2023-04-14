import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getAll() {
    console.log();
    return [
      { description: 'eat', done: true },
      { description: 'sleep', done: false },
      { description: 'play', done: false },
      { description: 'laugh', done: false },
    ];
  }
}
