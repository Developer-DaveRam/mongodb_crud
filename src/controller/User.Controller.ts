import type { RequestHandler } from "express";
import { UserService } from "../service/User.Servie.js";
import type { IUser } from "../interface/User.Interface.js";
import { ResposeBuilder } from "../helper/ResponseFormate.js";

export class UserController{
 private userService  = new UserService()

  createUser:RequestHandler = async(req,res)=>{
    try {
        const data:IUser = req.body
        const create  = await this.userService.createUser(data)
        return res.status(200).json(create)
    } catch (error:any) {
        return res.status(400).json(ResposeBuilder.Failur(0,"Internal Server Error",[error.message]))
    }
  }

}