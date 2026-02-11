import express from 'express'
import { PaymentController } from '../controller/Payment.Controller.js'

const paymentController = new PaymentController()
const paymentRouter = express.Router()

paymentRouter.post("/createPayment",
    //#swagger.tags = ['Payment']
    //#swagger.parameters['body'] = {in:'body',schema:{   user_id:"string",loanDate:121,loanId:333,loanAmount:333,roi:333,loanStatus:"string",requestStatus:"string",userData:{userName:"string",userId : "ObjectId",email:"string"}}}
    paymentController.createPayment
)
paymentRouter.post("/getPaymenton",
    //#swagger.tags = ['Payment']
    //#swagger.parameters['body'] = {in:'body',schema:{userId:"sksk"}}
    paymentController.getAllPaymentsUserId
)

export default paymentRouter