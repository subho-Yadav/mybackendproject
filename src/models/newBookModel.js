const mongoose=require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId
const newBookSchema=new mongoose.Schema({
	name:{
        type:String,
        unique:true,
        required:true
    },
		author:{
            type:objectId,
            ref:"NewAuthor"
        },
	price:Number,
		ratings:Number,
		publisher: {
            type:objectId,
            ref:"NewPublisher"
        },
        isHardCover:{
            type:Boolean,
            default:false
        }

},{timestamps:true})

module.exports=mongoose.model("NewBook",newBookSchema)