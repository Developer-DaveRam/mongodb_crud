import mongoose, { Schema } from "mongoose";

const UserSchema  = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:Number,
        required:true,
        unique:true
    }
})

export const userSchema = mongoose.model('users',UserSchema)