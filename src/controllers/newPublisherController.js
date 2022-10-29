const newPublisherModel=require('../models/newPublisherModel')

const createPublisher=async function(req,res){
    const data=req.body
    const savedData=await newPublisherModel.create(data)
    res.send(savedData)
}
module.exports.createPublisher=createPublisher