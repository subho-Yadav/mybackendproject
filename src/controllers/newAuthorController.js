const newAuthorModel=require('../models/newAuthorModel')

const createAuthor=async function(req,res){
    const data=req.body
    const savedData=await newAuthorModel.create(data)
    res.send(savedData)
}

module.exports.createAuthor=createAuthor