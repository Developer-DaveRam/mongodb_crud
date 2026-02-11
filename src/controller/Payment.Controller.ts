import type { RequestHandler } from "express";
import { PaymetService } from "../service/Payment.Service.js";
import type { IPayments } from "../interface/payment.Interface.js";
import { ResposeBuilder } from "../helper/ResponseFormate.js";

export class PaymentController{
    private paymentService = new PaymetService()

    createPayment:RequestHandler = async(req,res)=>{
        try {
            const data:IPayments = req.body
            const createPayment = await this.paymentService.createPayments(data)
            return res.status(200).json(createPayment)
        } catch (error:any) {
            return res.status(400).json(ResposeBuilder.Failur(0,"Internal Server Error",[error.message]))
        }
    }
    getAllPaymentsUserId:RequestHandler = async(req,res)=>{
        try {
            const {userId,cursor} = req.body
            const response = await this.paymentService.getAllPaymetsOnUserId(userId,cursor)
            return res.status(200).json(response)

        } catch (error:any) {
            return res.status(400).json(ResposeBuilder.Failur(0,"Internal Server Error",[error.message]))
        }
    }
}