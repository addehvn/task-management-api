import { ConflictException, Injectable, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserSignupDto } from '../dtos/UserSignupDto';
import * as bcrypt from 'bcrypt'
import { UserLoginDto } from '../dtos/userLoginDto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

  constructor(
    private userService:UserService,
    private jwtService:JwtService
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

async userLogin(body:UserLoginDto){
  const user=await this.userService.findByEmail(body.email)
  if(!user){
    throw new ConflictException('email or password is wrong')
  }

  const validPassword= await bcrypt.compare(body.password,user.password)

  if(!validPassword){
    throw new ConflictException('email or password is wrong!')
  }

  const payload={
    sub:user.id.toString(),
    email:user.email,
    name :user.name
  }

  return {
    access_token :this.jwtService.sign(payload)
  }
}
}