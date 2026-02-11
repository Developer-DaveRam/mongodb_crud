import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async()=>{
    try {   
        const connect = await mongoose.connect(process.env.url as string)
         if(connect.connection.readyState === 1){
            console.log("The Mongo Db is Connectd")
        }else{
            console.log("Error in COnnecting Db")
        }
    } catch (error) {
        console.log('error', error)
    }
}