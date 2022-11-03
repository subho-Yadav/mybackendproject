const authUserModel=require('../models/authUserModel')
const jwt=require('jsonwebtoken')
const { isValidObjectId, default: mongoose } = require('mongoose')
const updateDetails=async function(req,res){
    const requiredHeader=req.headers["x-auth-token"]
    if(!requiredHeader){
    return res.send("A mandatory header is not present")
    }
    try{  
    jwt.verify(requiredHeader,"Confidential login credentials")
    if(!isValidObjectId(req.params.userId)){
        return res.send("Logged in but invalid userId")
        }
    await authUserModel.updateOne({_id:req.params.userId},{$set:req.body})
    res.send("Details updated!")
    }
    catch{
        res.send("invalid signature!")
    }
}

module.exports.updateDetails=updateDetails