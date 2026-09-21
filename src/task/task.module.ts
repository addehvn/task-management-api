import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { UserService } from '../user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './taskSchema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:Task.name,
      schema:TaskSchema,
    }])
    
  ],
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {}
