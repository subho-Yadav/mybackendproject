const { isValidObjectId, default: mongoose } = require('mongoose')
const orderModel=require('../models/orderModel')
const appUserModel=require('../models/appUserModel')
const productModel = require('../models/productModel')
const moment=require('moment')

const createOrder=async function(req,res){
    data=req.body
    const userStatus=(req.isfreeappuser==='true')?true:false
    if(!isValidObjectId(data.userId)){
        res.send("Invalid user ID")
    }
    else if(!isValidObjectId(data.productId))
    {
        res.send("Invalid Product ID")
    }
    else{
        data.isFreeAppUser=userStatus
        // console.log(userStatus)
        if(userStatus==false){
            const pdtPrice=await productModel.findById(data.productId)
            let userBal=await appUserModel.findById(data.userId)
            userBal=userBal.balance
            if(pdtPrice.price>userBal){
                return res.send("User has insufficient balance!")
            }
            data.amount=pdtPrice.price
            // console.log(typeof pdtPrice.price)
            await appUserModel.updateOne({_id:data.userId},{$inc:{balance:-pdtPrice.price}})
        }
        else{
            data.amount=0
            //and user's balance is not deducted
        }

        data.date=moment().format('DD MM YYYY')

        const savedData=await orderModel.create(data)
        res.send({msg:savedData})

    }

}

module.exports={createOrder}
