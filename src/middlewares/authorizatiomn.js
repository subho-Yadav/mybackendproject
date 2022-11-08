const jwt=require('jsonwebtoken')
const authUserModel=require('../models/authUserModel')
const authenticate=async function(req,res,next){
const requiredHeader=req.headers["x-auth-token"]
try{
    if(!requiredHeader){
    return res.status(404).send("A mandatory header is not present")
    }

      
        const decode=jwt.verify(requiredHeader,"Confidential login credentials")
        const intUser= await authUserModel.findById(req.params.userId)

        console.log(decode.emailId,intUser.emailId)
        
    if(intUser.emailId!=decode.emailId){
       return  res.status(401).send('Unauthorised!')
    }
    
    next()
}
catch(error){
    res.status(500).send({msg: error.message})
}
    
}
module.exports.authenticate=authenticate