const express = require('express');

const router = express.Router();

let persons= [
  {
  name: "PK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "SC",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]


router.post("/voters",function(req,res){
  const resultArray= []
 persons.forEach(elem=>{
    if(elem.age>=req.query[Object.keys(req.query)[0]]){
          elem.votingStatus=true
          resultArray.push(elem)
    }
  })
  res.send(resultArray)
}

)


module.exports = router;
