import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtGuard } from '../guards/JWT-guard';
import type{ AuthRequest } from '../interfaces/authRequest';
import { createtaskDto } from '../dtos/createTaskDto';
import { updateTaskDto } from '../dtos/updateTaskDto';
import { JwtPayload } from '../interfaces/jwtPayload.interface';

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
  @Patch('/updateTask/:id')
  async updateTask(@Req() req:AuthRequest , @Param('id') id:string  ,  @Body() body:updateTaskDto){
    return await this.taskService.updateTask(
      body, 
      id,
      req.user.userId
    )
  }

  @UseGuards(JwtGuard)
  @Get('/taskDetail/:id')
  async taskDetail(@Req() req:AuthRequest, @Param('id') id:string){
    return await this.taskService.taskDetail(
      id,
      req.user.userId
    )
  }

  @UseGuards(JwtGuard)
  @Delete('/deleteTask/:id')
   async deleteTask(@Req() req:AuthRequest , @Param('id') id:string){
    return await this.taskService.deleteTask(
      id,
      req.user.userId
    )
   }
}
