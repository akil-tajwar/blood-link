const express = require("express");
const { login, signup, getAllUser } = require("../controllers/userController");

const router = express.Router();

//post
router.post('/signup',signup);
router.post('/login',login);

//get
router.get('/getAllUsers', getAllUser);


module.exports = router;