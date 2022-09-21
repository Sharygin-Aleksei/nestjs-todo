import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
