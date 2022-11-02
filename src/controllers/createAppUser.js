const appUserModel=require('../models/appUserModel')
const createAppUser=async function(req,res){
    const data=req.body
    data.isFreeAppUser=(req.isfreeappuser=='true')?true:false
    const savedData=await appUserModel.create(data)
    res.send({msg:savedData})
}

module.exports={createAppUser}