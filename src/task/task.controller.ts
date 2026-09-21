import { Body, Controller, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtGuard } from '../guards/JWT-guard';
import type{ AuthRequest } from '../interfaces/authRequest';
import { createtaskDto } from '../dtos/createTaskDto';
import { updateTaskDto } from '../dtos/updateTaskDto';

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

  @UseGuards(JwtGuard)
  @Patch('/updateTask')
  async updateTask(@Req() req:AuthRequest, @Body() body:updateTaskDto){
    return await this.taskService.updateTask(
      body, 
      req.user.taskId
    )
  }
}
