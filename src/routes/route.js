const print=require("../logger/logger")
const lodash = require('lodash');
const functions=require("../util/helper")
const formaters=require("../validator/formatter")
const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
// console.log(functions)
// console.log(formaters)
router.get('/test-me', function (req, res) {

   // console.log(`${functions.getBatchInfo()} today's date is ${functions.printDate()} and month is ${functions.printMonth()}`)

   // print.printWelcome("Aman Bansal")

   // formaters.trim()
   // formaters.changeToLowerCase()
   // formaters.changeToUpperCase()
   // res.send('My first ever API')

   

const months=['January','February','March','April','May','June','July','August','September','October','November','December']
// console.log(lodash.chunk(months,3))


const numbers=[0,1,2,3,4,5,6,7,8,9]
// console.log(lodash.tail(numbers))

const arr1=[1,1,2,2,3,4]
const arr2=[5,5,4,5,7,6]
const arr3=[4,5,7,8,8,8]
const arr4=[4,5,6,7,8,9]
const arr5=[7,8,9,4,5,6]
// console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))


// const pairs=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
// const resultObject=lodash.fromPairs(pairs)
// console.log(resultObject)


   res.send('This is my first ever API')
});

module.exports = router;

