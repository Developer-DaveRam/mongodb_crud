import mongoose, { Types } from "mongoose";
import {
  ResposeBuilder,
  type ResponseFormate,
} from "../helper/ResponseFormate.js";
import type { IPayments } from "../interface/payment.Interface.js";
import { paymentSchema } from "../models/payment.Schema.js";
import { userSchema } from "../models/user.Schema.js";

export class PaymetService {
  async createPayments(data: IPayments): Promise<ResponseFormate> {
    try {
      if (!mongoose.Types.ObjectId.isValid(data.user_id)) {
        return ResposeBuilder.Failur(0, "Invalid ObjectId", [
          "Enter A Currect Object Id",
        ]);
      }

      const userCheck = await userSchema.findById(data.user_id);

      if (!userCheck) {
        return ResposeBuilder.Failur(0, "User Not Found", [
          "No user Found  in this object Id",
        ]);
      }

      const createPayments = await paymentSchema.create(data);
      return ResposeBuilder.Sucess(1, "The payment Added", [createPayments]);
    } catch (error: any) {
      return ResposeBuilder.Failur(0, "Error in Adding the paymenr", [
        error.message,
      ]);
    }
  }

  async getAllPaymetsOnUserId(id: string,cursor:string): Promise<ResponseFormate> {
    try {
        const matchStage:any={
            user_id:new mongoose.Types.ObjectId(id)
        }

        if(cursor){
            matchStage._id = {
                $gt : new mongoose.Types.ObjectId(cursor)
            }
        }
      const data = await paymentSchema.aggregate([
        {
          $match: matchStage
        },{
            $sort:{_id:1}
        },
        {
            $limit:2
        },
        {
          $lookup: {
            from: "users",
            foreignField: "_id",
            localField: "user_id",
            as: "userData",
          },
        },
        {
          $unwind: "$userData",
        },
        {
          $group: {
            _id: "$user_id",
            userData: { $first: "$userData" },
            payments: {
              $push: {
                _id: "$_id",
                loanDate: "$loanDate",
                loanId: "$loanId",
                loanAmount: "$loanAmount",
                roi: "$roi",
                loanStatus: "$loanStatus",
                requestStatus: "$requestStatus",
              },
            },
          },
        },
      ]);

      return ResposeBuilder.Sucess(1, "The Data", data);
    } catch (error: any) {
      return ResposeBuilder.Failur(0, "Error in Fetching the Data", [
        error.message,
      ]);
    }
  }



}
