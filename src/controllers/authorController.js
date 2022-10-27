const authorModel=require('../models/authorModel')


const createAuthor=async function(req,res){
    const data=req.body
    const savedData=await authorModel.create(data)
    res.send({msg:savedData})
}



module.exports.createAuthor=createAuthor
