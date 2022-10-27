const bookModel=require('../models/bookModel')
const authorModel=require('../models/authorModel')
const { find } = require('../models/authorModel')

const getBooksByCb = async function(req,res){
    let cb=await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1, _id:0})
    cb=cb[0].author_id
    const result=await bookModel.find({author_id:cb})
    res.send({msg:result})
}


const getTwoStates=async function(req,res){
    let autId=await bookModel.findOneAndUpdate({name:"Harry Porter"},{$set:{price:100}},{new:true})
    // console.log(typeof autId.price)
    let author=await authorModel.find({author_id:autId.author_id})

    res.send({updatedPrice:autId.price,authorName:author[0].author_name})
}

const findBooks=async function(req,res){
    const books=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0,name:1})
    const r=[]
    books.forEach(async (e)=>{
        
        let author= await authorModel.find({author_id:e.author_id})
        author=author[0].author_name
        // console.log(e.name+" : "+author)
        // console.log( author[0].author_name)
        await r.push
    })
    console.log(r)
    res.send({msg:r})
}


module.exports.getBooksByCb=getBooksByCb
module.exports.getTwoStates=getTwoStates
module.exports.findBooks=findBooks