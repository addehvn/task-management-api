import { ConflictException, Injectable, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserSignupDto } from '../dtos/UserSignupDto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {

  constructor(
    private userService:UserService
  ){};

  async userSignup(body:UserSignupDto){
    const emailcheck=await this.userService.findByEmail(body.email)

  if(emailcheck){
    throw new ConflictException('email already exists')
  }

  const hashPassword=await bcrypt.hash(body.password,10)

  const user=await this.userService.create(
    {...body,
    password:hashPassword}
  )

  return{
    message:'User created successfully',
    userId:user.id
  }
};
}