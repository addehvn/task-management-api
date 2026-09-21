import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './taskSchema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>
  ){}
  getAllTasks(userId:string){
    const tasks=this.taskModel.find({userId})
    return tasks;
  }

}
