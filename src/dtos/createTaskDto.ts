import { IsBoolean, IsString } from "class-validator";


export class createtaskDto{
  
  @IsString()
  title:string
  @IsString()
  description:string
  @IsBoolean()
  completed:boolean
}