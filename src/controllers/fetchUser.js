const authUserModel=require('../models/authUserModel')

const fetchUser=async function(req,res){
    console.log(req.params)
    const requiredHeader=req.headers["x-auth-token"]
    console.log(requiredHeader)
    res.send({msg:})
}
module.exports.fetchUser=fetchUser