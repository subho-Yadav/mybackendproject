const authUserModel=require('../models/authUserModel')
const jwt=require('jsonwebtoken')
const { isValidObjectId, default: mongoose } = require('mongoose')
const fetchUser=async function(req,res){
    console.log(req.params)
    const user=await authUserModel.findById(req.params.userId)
    if(!user.isDeleted){
    res.send({data:user})
    }
    else{
        res.send("User Not found!")
    }
    }
   
    

module.exports.fetchUser=fetchUser