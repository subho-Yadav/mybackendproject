const authUserModel=require('../models/authUserModel')
const jwt=require('jsonwebtoken')
const { isValidObjectId, default: mongoose } = require('mongoose')
const updateDetails=async function(req,res){
     await authUserModel.findOneAndUpdate({_id:req.params.userId},{$set:req.body},{$new:true})
    res.send('Details updated!')
    }
    

module.exports.updateDetails=updateDetails