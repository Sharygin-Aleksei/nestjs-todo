import { Injectable } from '@nestjs/common';
import { Todo, TodoDocument } from './todo.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async createTodo(name: string): Promise<Todo> {
    const todo = new this.todoModel({ name: name });
    return todo.save();
  }

  getAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  getById(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }
}
