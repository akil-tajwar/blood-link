const express = require("express");
const { createNeedBlood, getAllNeedBlood, getSingleNeedBlood } = require("../controllers/needBloodController");

const router = express.Router();

//get
router.get('/getAllNeedBlood',getAllNeedBlood);
router.get('/getSingleNeedBlood/:id',getSingleNeedBlood);

//post
router.post('/createNeedBlood',createNeedBlood);


module.exports = router;