const jwt=require('jsonwebtoken')
const authUserModel=require('../models/authUserModel')
const authenticate=async function(req,res,next){
const requiredHeader=req.headers["x-auth-token"]
    if(!requiredHeader){
    return res.send("A mandatory header is not present")
    }

      
        const decode=jwt.verify(requiredHeader,"Confidential login credentials")
        const intUser= await authUserModel.findById(req.params.userId)

        console.log(decode.emailId,intUser.emailId)
        
    if(intUser.emailId!=decode.emailId){
       return  res.send('Unauthorised!')
    }
    
    next()
    
}
module.exports.authenticate=authenticate