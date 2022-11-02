const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    
        name:{type:String,unique:true,required:true},
        category:String,
        price:{type:Number,required:true}
    
},{timestamps:true})

module.exports=mongoose.model("Product",productSchema)