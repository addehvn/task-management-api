import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class UserLoginDto{

  @IsEmail()
  email:string

  @IsStrongPassword()
  password:string
}