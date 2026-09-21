import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps:true})
export class Task{
  @Prop({required:true})
  userId:string
  @Prop({required:true})
  title:string

  @Prop()
  description:string

  @Prop({default:true})
  completed:boolean
}
export const TaskSchema=SchemaFactory.createForClass(Task)