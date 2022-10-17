const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();



router.get("/movies",function(req,res){
   const moviesNames=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   res.send(moviesNames)
})

router.get("/movies/:indexNumber",function(req,res){
   const moviesNames=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   if(req.params.indexNumber>(moviesNames.length-1)){
      res.send('Please enter a valid index')
   }
   res.send(moviesNames[req.params.indexNumber])
   // console.log(req.params)
})

router.get("/films",function(req,res){
   const films=[ {id: 1,name: "The Shining"}, {id: 2,name: "Incendies"} , {id: 3,name: "Rang de Basanti"} , {id: 4,name: "Finding Nemo"}]
      
   res.send(films)
})

router.get("/films/:filmid",function(req,res){
   const films=[ {id: 1,name: "The Shining"}, {id: 2,name: "Incendies"} , {id: 3,name: "Rang de Basanti"} , {id: 4,name: "Finding Nemo"}]


   // res.send(req.params.filmid)
   // console.log(req.params.filmid)
   // console.log(films.map(element=>element.id))
 // console.log(typeof req.params.filmid )

   const reqFilm=films.find(element=>element.id==req.params.filmid)
   if(reqFilm==undefined){
      res.send('No movie exists with this id')
   }
   res.send(reqFilm)
   // console.log(reqFilm)
})

module.exports = router;