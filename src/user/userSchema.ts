import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
 _id:string 
 
  @Prop()
  name:string 

  @Prop()
  email:string

  @Prop()
  password:string
}

export const userSchema=SchemaFactory.createForClass(User)