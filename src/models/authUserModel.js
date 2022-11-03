const mongoose=require('mongoose')
const authUserSchema=new mongoose.Schema({
        firstName : {type:String,required:true},
        lastName : {type:String,required:true},
        mobile : {type:Number,unique:true,required:true},
        emailId : {type:String,unique:true,required:true},
        password : {type:String,unique:true,required:true},
        gender : {type:String,enum:["male","female","other"]},
        isDeleted:{type:Boolean,default:false}, //default value is false 
        age : Number
        
},{timestamps:true})

module.exports=mongoose.model("Authuser",authUserSchema)

