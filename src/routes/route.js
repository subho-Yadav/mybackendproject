const express = require("express");
const myHelper = require("../util/helper");
const underscore = require("underscore");

const playerInfo = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

const router = express.Router();

router.get("/sol1", function (req, res) {
  const natNo = [1, 2, 3,5, 6, 7]; // n*(n+1)/2
  const sumOfnNatNo =
    (natNo[natNo.length - 1] * (natNo[natNo.length - 1] + 1)) / 2;
  const sum = natNo.reduce((acc, nxt) => acc + nxt);
  res.send({ data: sumOfnNatNo - sum });
});

router.get("/sol2", function (req, res) {
  const array = [33, 34, 35,37, 38];
  const actualSum =
    ((array[array.length - 1] - array[0] + 1) / 2) *
    (array[0] + array[array.length - 1]);
  const sum = array.reduce((acc, nxt) => acc + nxt);
  res.send(`Missing no: ${actualSum - sum}`);
});

router.post("/players",function(req,res){
    // console.log(req.body)
    const check=playerInfo.find((elem)=>elem.name==req.body.name)
    if(!check){
        playerInfo.push(req.body)
        res.send({result: playerInfo})
    }
    else{
        res.send("Cannot add players with same name!")
    }
    
    
})

module.exports = router;
