import { connectDB as db } from "../db/db.js";
import { ResposeBuilder, type ResponseFormate } from "../helper/ResponseFormate.js";
import type { IUser } from "../interface/User.Interface.js";
import { userSchema } from "../models/user.Schema.js";

export class UserService{
   async createUser(data:IUser):Promise<ResponseFormate>{
    try {
        const create = await userSchema.create(data)
        return ResposeBuilder.Sucess(1,"The User Added",[create])
    } catch (error:any) {
        return ResposeBuilder.Failur(0,"Error in Adding the Value",[error.message])
    }
   } 
}