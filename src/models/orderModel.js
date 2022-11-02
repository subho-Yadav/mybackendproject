const mongoose=require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId
const orderSchema=new mongoose.Schema({
	userId: {type:objectId,ref:"Appuser"},
	productId: {type:objectId,ref:"Product"},
	amount: {type:Number,default:0},
	isFreeAppUser: {type:Boolean,default:true}, 
	date: String
    
 },{timestamps:true} )

 module.exports=mongoose.model("Orders",orderSchema)