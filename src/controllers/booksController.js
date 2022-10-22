const bookColl=require('../models/bookData')


async function createBook(req,res){
    const data=req.body
    const savedData=await bookColl.create(data)
    res.send({msg:savedData})
}

async function getBook(req,res){
    const allBooks=await bookColl.find()
    res.send(allBooks)
}

module.exports={createBook,getBook}