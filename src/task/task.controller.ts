import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtGuard } from '../guards/JWT-guard';
import type{ AuthRequest } from '../interfaces/authRequest';
import { createtaskDto } from '../dtos/createTaskDto';

@Controller('task')
export class TaskController {
  constructor(
    private taskService:TaskService,
    
  ){}
  @UseGuards(JwtGuard)
  @Get('/allTasks')
  getAllTasks(@Req() req:AuthRequest){
    return this.taskService.getAllTasks(req.user.userId)
  }

  @UseGuards(JwtGuard)
  @Post('/createTask')
  createTask(@Req() req:AuthRequest ,@Body() body:createtaskDto){
    return this.taskService.createTask(body,req.user.userId)
  }

}
