const authUserModel=require('../models/authUserModel')
const jwt=require('jsonwebtoken')
const { isValidObjectId, default: mongoose } = require('mongoose')
const fetchUser=async function(req,res){
    
    const requiredHeader=req.headers["x-auth-token"]
    if(!requiredHeader){
    return res.send("A mandatory header is not present")
    }
    try{
    jwt.verify(requiredHeader,"Confidential login credentials") 
    if(!isValidObjectId(req.params.userId)){
    return res.send("Logged in but invalid userId")
    }
    const user=await authUserModel.findById(req.params.userId)
    if(!user.isDeleted){
    res.send({data:user})
    }
    else{
        res.send("User Not found!")
    }
    }
    catch{
        res.send("invalid signature")
    }
    
}
module.exports.fetchUser=fetchUser