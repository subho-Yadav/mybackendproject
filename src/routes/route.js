const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userRegistration=require('../controllers/userRegistration')
const userLogger=require('../controllers/userLogin')
const fetchUser=require('../controllers/fetchUser')
const updateUser=require('../controllers/updateDetails')
const deleteUser=require('../controllers/deleteUser')
const authorise=require('../middlewares/authorizatiomn')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)


//New Routes

router.post("/registration",userRegistration.userRegistration)
router.post("/user-login",userLogger.userLogger)

router.get("/fetchuser/:userId",authorise.authenticate,fetchUser.fetchUser)
router.put("/update-details/:userId",authorise.authenticate,updateUser.updateDetails)
router.put("/delete-user/:userId",authorise.authenticate,deleteUser.deleteUser)

module.exports = router;