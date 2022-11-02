const mongoose=require('mongoose')
const appUserModel=new mongoose.Schema({
        name: {required:true,type:String},
        balance:{type:Number,default:100}, // Default balance at user registration is 100
        address:String,
        age:Number,
         gender: {type:String,enum:["male","female","other"]},  
        isFreeAppUser: {default:false,type:Boolean} 
},{timestamps:true})

module.exports=mongoose.model("Appuser",appUserModel)