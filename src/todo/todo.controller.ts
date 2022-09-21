import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { JwtAuthGuard } from '../auth/jwtAuth.guard';

@Controller('todo')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/create')
  async createTodo(@Body('name') name): Promise<Todo> {
    return await this.todoService.createTodo(name);
  }

  @Get('/getAll')
  async getAll(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }

  @Get('/getById')
  async getById(@Query('id') id): Promise<Todo> {
    return await this.todoService.getById(id);
  }
}
