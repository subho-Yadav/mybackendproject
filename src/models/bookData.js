 
const mongoose=require('mongoose')
const bookSchema=new mongoose.Schema({
    bookName:{
        unique:true,
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required: true
    },
    category:[String],
    year:Number
})

module.exports=mongoose.model("Book",bookSchema)//creates a collection into the cluster (books)