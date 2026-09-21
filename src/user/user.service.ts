import { Injectable, Req } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { User } from './userSchema';
import { Model } from 'mongoose';
import { UserSignupDto } from '../dtos/UserSignupDto';
import { userUpdateDto } from '../dtos/userUpdateDto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
     private  userModel:Model<User>
    ){}


    findByEmail( email:string){
      return this.userModel.findOne({email})
    }

    create(body:UserSignupDto){
      return this.userModel.create(body)
    }

    async userUpdate(userId:string ,body:userUpdateDto){
      if(body.password){
        body.password=await bcrypt.hash(body.password,10)
      }
      const user=await this.userModel.findByIdAndUpdate(
        userId,
        body,
        {new :true}
      ).select('-password');

      return {
        message:'user updated successfully',

      }

    }

    async userdelete(userId:string){
      const user=await this.userModel.findByIdAndDelete(userId)
      return {
        message:'user deleted successfully'
      }
    }


}
