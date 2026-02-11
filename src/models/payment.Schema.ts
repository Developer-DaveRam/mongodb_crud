import mongoose, { Schema } from "mongoose";

const PaymentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  loanDate: { type: Number, required: true },
  loanId: { type: Number, required: true },
  loanAmount: { type: Number, required: true },
  roi: { type: Number, required: true },
  loanStatus: { type: String, required: true },
  requestStatus: { type: String, required: true },
  userData:{
    userName:{type:String},
    userId:{type:Schema.Types.ObjectId},
    email:{type:String}
  }
});

export const paymentSchema = mongoose.model('payments',PaymentSchema)