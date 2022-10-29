const mongoose=require('mongoose')
const newPublisherSchema=new mongoose.Schema({
name: {
    type:String,
    required:true,
    unique:true
},
headQuarter:String
},{timestamps:true})

module.exports=mongoose.model("NewPublisher",newPublisherSchema)
