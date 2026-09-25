import { Injectable,} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './taskSchema';
import { Model } from 'mongoose';
import { createtaskDto } from '../dtos/createTaskDto';
import { updateTaskDto } from '../dtos/updateTaskDto';

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

  createTask(body:createtaskDto , userId:string){
    this.taskModel.create(
      {...body,
        userId
      })
    return {
      message:'task created successfully',
      body 
    }
  }

  async updateTask(body:updateTaskDto, id:string){
    const updatedTask= await this.taskModel.findByIdAndUpdate(id,body)
    return {
      mnessage : 'task updated successfully',
      body
    }
  }

  async taskDetail(id:string){
    return await  this.taskModel.findById(id)
  }

  async deleteTask(id:string){
    await this.taskModel.findByIdAndDelete(id)
    return {
      message:"task deleted successfully"
    }
  }
}
