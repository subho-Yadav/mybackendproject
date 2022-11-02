const productModel=require('../models/productModel')
const createProduct=async function(req,res){
    const data=req.body
    const savedData=await productModel.create(data)
    res.send({msg:savedData})
}
module.exports={createProduct}