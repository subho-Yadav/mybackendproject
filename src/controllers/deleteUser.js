const authUserModel=require('../models/authUserModel')
const { isValidObjectId, default: mongoose } = require('mongoose')
const jwt=require('jsonwebtoken')

const deleteUser=async function(req,res){
    const userId=req.params.userId

    await authUserModel.updateOne({_id:userId},{$set:{isDeleted:true}})
    res.send("User deleted successfully!")
    }
module.exports.deleteUser=deleteUser