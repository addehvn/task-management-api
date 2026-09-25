import { Injectable, NotFoundException, UnauthorizedException,} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './taskSchema';
import { Model } from 'mongoose';
import { createtaskDto } from '../dtos/createTaskDto';
import { updateTaskDto } from '../dtos/updateTaskDto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>
  ){}
  getAllTasks(userId:string){
    const tasks=this.taskModel.find({userId})
    if(!tasks){
      throw new UnauthorizedException('you can only view your own tasks')
    }
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

  async updateTask(body:updateTaskDto, id:string, userId:string){
    const updatedTask= await this.taskModel.findOneAndUpdate({_id:id,
      userId:userId,
      },
      body,
    {new:true})
    if(!updatedTask){
      throw new NotFoundException('you can only update your own task')
    }
    return {
      mnessage : 'task updated successfully',
      body
    }
  }

  async taskDetail(id:string, userId:string ){
    const task= await  this.taskModel.findOne({
      _id:id,
      userId:userId
    })
    if(!task){
      throw new NotFoundException('you can only view your own task')
    }
    return  task 
  }

  async deleteTask(id:string,userId:string
  ){
   const deleteTask= await this.taskModel.findOneAndDelete({
      _id:id,
      userId:userId
    })
    if(!deleteTask){
      throw new NotFoundException('you can only delete your own task')
    }
    return {
      message:"task deleted successfully"
    }
  }
}
