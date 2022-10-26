const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList=async function(req,res){
    const list=await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send(list)
}

const getBooksInYear=async function(req,res){
    const year=req.body.year
    const booksInYear=await BookModel.find({year:year})
    res.send(booksInYear)
}

const getXINRBooks = async function (req,res){
let indian = await BookModel.find({$or:[{"prices.indianPrice":"INR200"},{"prices.indianPrice":"INR100"},{"prices.indianPrice":"INR500"}]})
    res.send({data:indian})
}


const getParticularBooks=async function(req,res){
    const conditionObject=req.body
    console.log(conditionObject)
    const result=await BookModel.find(conditionObject)
    res.send({msg:result})
}

const getRandomBooks=async function(req,res){
    let result=await BookModel.find({$or:[{totalPages:{$gt:500}},{stockAvailable:true}]})
    res.send({msg:result})
}
    

module.exports.getParticularBooks=getParticularBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.createBook=createBook
module.exports.bookList= bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks=getXINRBooks

