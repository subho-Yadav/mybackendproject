const jwt=require('jsonwebtoken')
const authenticate=function(req,res,next){
const requiredHeader=req.headers["x-auth-token"]
    if(!requiredHeader){
    return res.send("A mandatory header is not present")
    }

    try{  
        jwt.verify(requiredHeader,"Confidential login credentials")
        next()
    }
    catch{
        res.send("invalid signature!")
    }
}
module.exports.authenticate=authenticate