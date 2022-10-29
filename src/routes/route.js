const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
//new controllers
const newAuthorController=require('../controllers/newAuthorController')
const newPublisherController=require('../controllers/newPublisherController')
const newBookController=require('../controllers/newBookController')
const addBoolController=require('../controllers/addBoolController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
//new routes
router.post("/createnewauthor",newAuthorController.createAuthor)
router.post("/createnewpublisher",newPublisherController.createPublisher)
router.post("/createnewbook",newBookController.createNewBook)
router.get("/getnewbooks",newBookController.getNewBooks)
router.put("/addisHardCover",addBoolController.addBool)
router.put("/icreasePrice",addBoolController.setHardCover)
router.put("/modifyPublisher",addBoolController.modifyPublisher)
module.exports = router;