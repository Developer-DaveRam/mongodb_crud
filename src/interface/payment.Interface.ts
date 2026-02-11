import type { Types } from "mongoose";

export interface Iuser{
    userName:string,
    userId : Types.ObjectId,
    email:string
}

export interface IPayments{
    id?:string,
    user_id:Types.ObjectId, 
    loanDate:number,
    loanId:number,
    loanAmount:number,
    roi:number,
    loanStatus:string,
    requestStatus:string,
    userData?:Iuser
}