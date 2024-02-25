const express=require("express");
const { getCategory } = require("../controllers/category");
const auth = require("../middleware/authorization");

const router=express.Router();

router.get("/getall",auth,getCategory);

module.exports = router;