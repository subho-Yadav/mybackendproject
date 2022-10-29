const bookModel=require('../models/newBookModel')
const authorModel=require('../models/newAuthorModel')
const publisherModel=require('../models/newPublisherModel')
const router = require('../routes/route')

const createNewBook=async function(req,res){
    const{author,publisher}=req.body

    if(!author){
        res.send("Author id not available")
    }
    else if(!publisher){
        res.send("Publisher id not available")
    }

    else{
    
    //valid Authorids
    let validAuthorIds=await authorModel.find().select({_id:1})
     validAuthorIds=validAuthorIds.map(e=>e._id.toString())
    
    //valid publisherids
    let validPublisherIds=await publisherModel.find().select({_id:1})
    validPublisherIds=validPublisherIds.map(e=>e._id.toString())

    if(!validAuthorIds.includes(author)){
        res.send("Please enter valid author id")
    }
    else if(!validPublisherIds.includes(publisher)){
        res.send("Please enter valid publisher id")
    }

    else{
        const data=req.body
        const savedData=await bookModel.create(data)
        res.send({msg:savedData})
    }
}
}
const getNewBooks=async function(req,res){
    const data=await bookModel.find().populate('author').populate('publisher') 
    res.send({msg:data})
}

module.exports.createNewBook=createNewBook
module.exports.getNewBooks=getNewBooks