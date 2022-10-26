const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true,
        unique:true        
    }, 
    authorName: String,
    year:{
        type:Number,
        default:2021
    } ,
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String
    },
    totalPages:Number,
    stockAvailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books

