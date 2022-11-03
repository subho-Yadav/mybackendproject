const authUserModel=require('../models/authUserModel')
const { isValidObjectId, default: mongoose } = require('mongoose')
const jwt=require('jsonwebtoken')

const deleteUser=async function(req,res){
const requiredHeader=req.headers["x-auth-token"]
if(!requiredHeader){
    return res.send("A mandatory header is not present")
    }
    try{
    jwt.verify(requiredHeader,"Confidential login credentials")
    const userId=req.params.userId
    if(!isValidObjectId(userId)){
        return res.send("Logged in but invalid userId")
        }
    await authUserModel.updateOne({_id:userId},{$set:{isDeleted:true}})
    res.send("User deleted successfully!")
    }
    catch{
        res.send('invalid signature')
    }
}

module.exports.deleteUser=deleteUser