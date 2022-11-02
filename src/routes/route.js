const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

/*New inports */
const headerValidation=require('../middlewares/headerValidationMw')
const createAppUser=require('../controllers/createAppUser')
const createProduct=require('../controllers/createProduct')
const createOrder=require("../controllers/createOrder")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

/*New routes */
router.post("/create-app-user",headerValidation.headerValidation,createAppUser.createAppUser)
router.post("/create-product",createProduct.createProduct)
router.post("/create-order",headerValidation.headerValidation,createOrder.createOrder)


module.exports = router;