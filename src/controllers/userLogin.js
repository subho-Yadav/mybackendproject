const authUserModel=require('../models/authUserModel')
const jwt=require('jsonwebtoken')

const userLogger=async function(req,res){
    const Uemail=req.body.emailId
    const Upassword=req.body.password

    const userData=await authUserModel.findOne({emailId:Uemail,password:Upassword})
    if(!userData){
        res.send("Credentials are not valid!")
    }
    else{
    const token=jwt.sign({emailId:Uemail,password:Upassword},"COnfidential login credentials")
    res.send({status:true,data:{token:token}})
    }
}

module.exports.userLogger=userLogger