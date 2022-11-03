const authUserModel=require('../models/authUserModel')

const userRegistration=async function(req,res){
    const data=req.body
    const savedData=await authUserModel.create(data)
    res.send({msg:savedData})
}

module.exports.userRegistration=userRegistration