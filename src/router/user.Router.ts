import express from 'express'
import { UserController } from '../controller/User.Controller.js'

const userRoute = express.Router()
const userController = new UserController()

userRoute.post("/createUser",
    //#swagger.tags = ['User']
    //#swagger.parameters['body'] = {in:'body',schema:{name:"sss",email:"sss",mobileNo:1111}}
    userController.createUser
)



export default userRoute

