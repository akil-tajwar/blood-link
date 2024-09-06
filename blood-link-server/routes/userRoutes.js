const express = require("express");
const { singupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

//post
router.post('/singupUser',singupUser);
router.post('/loginUser',loginUser);


module.exports = router;