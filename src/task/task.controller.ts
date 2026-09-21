import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtGuard } from '../guards/JWT-guard';
import type{ AuthRequest } from '../interfaces/authRequest';
import { AuthGuard } from '@nestjs/passport';

@Controller('task')
export class TaskController {
  constructor(
    private taskService:TaskService,
    
  ){}
  @UseGuards(AuthGuard('jwt'))
  @Get('/allTasks')
  getAllTasks(@Req() req:AuthRequest){
    return this.taskService.getAllTasks(req.user.userId)
  }

}
