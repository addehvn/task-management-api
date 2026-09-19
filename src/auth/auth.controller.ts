import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSignupDto } from '../dtos/UserSignupDto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService:AuthService
  ){}

  @Post('/signup')
  UserSignup(@Body() body:UserSignupDto){
    this.authService.userSignup(body);
  }
}
