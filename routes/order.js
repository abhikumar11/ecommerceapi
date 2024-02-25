const express = require('express')
const auth = require("../middleware/authorization");
const { createOrder, orderDetail, orderHistory } = require('../controllers/order');

const router=express.Router()

router.post("/neworder",auth,createOrder)
router.get("/orderdetail/:orderid",auth,orderDetail)
router.post("/orderhistory",auth,orderHistory)

module.exports = router;