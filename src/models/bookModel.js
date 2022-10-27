const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:{
        type:String,
        unique:true
    },
    author_id:{
        type:Number,
        required:true
    },
    price:Number,
    ratings:Number,
    }, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)
