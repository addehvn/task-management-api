import { Body, Controller, Delete, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/JWT-guard';
import type { AuthRequest } from '../interfaces/authRequest';
import { userUpdateDto } from '../dtos/userUpdateDto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(
    private userServiuce:UserService
  ){}
  @UseGuards(JwtGuard)
  @Get('/profile')
  userProfile(@Req() req:AuthRequest){
    return req.user;
  }
  
  @UseGuards(JwtGuard)
  @Patch('/update-profile')
  updateProfile(@Req() req:AuthRequest ,@Body() body:userUpdateDto){
    return this.userServiuce.userUpdate(req.user.userId ,body)
  }

  @UseGuards(JwtGuard)
  @Delete('/delete-user')
  deleteUser(@Req() req:AuthRequest){
    return this.userServiuce.userdelete(req.user.userId)
  }
}
