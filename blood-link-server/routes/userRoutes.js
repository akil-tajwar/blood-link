const express = require("express");
const { login, signup } = require("../controllers/userController");

const router = express.Router();

//post
router.post('/signup',signup);
router.post('/login',login);


module.exports = router;