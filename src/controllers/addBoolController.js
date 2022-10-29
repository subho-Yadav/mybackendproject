const newBookModel=require('../models/newBookModel')

const addBool=async function(req,res){
    const updates=await newBookModel.updateMany({},{$set:{isHardCover:false}})
    const updated=await newBookModel.find()
    res.send({msg:updated})
}

const setHardCover=async function(req,res){
    await newBookModel.updateMany({ratings:{$gt:3.5}},{$inc:{price:10}})
    const updated=await newBookModel.find({ratings:{$gt:3.5}})
    res.send({msg:updated})
}

const modifyPublisher=async function(req,res){
    await newBookModel.updateMany({$or:[{publisher:"635bba6dcadb7c01bd30a921"},{publisher:"635bb9cacadb7c01bd30a91d"}]},{$set:{isHardCover:true}})
    const modified=await newBookModel.find({$or:[{publisher:"635bba6dcadb7c01bd30a921"},{publisher:"635bb9cacadb7c01bd30a91d"}]}).populate('publisher')
    res.send({msg:modified})
}

module.exports.addBool=addBool
module.exports.setHardCover=setHardCover
module.exports.modifyPublisher=modifyPublisher