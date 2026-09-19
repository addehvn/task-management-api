import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSignupDto } from '../dtos/UserSignupDto';
import { UserLoginDto } from '../dtos/userLoginDto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService:AuthService
  ){}

  @Post('/signup')
  UserSignup(@Body() body:UserSignupDto){
    this.authService.userSignup(body);
  }

  @Post()
  UserLogin(@Body() body:UserLoginDto){
    return this.authService.userLogin(body);
  }
}
