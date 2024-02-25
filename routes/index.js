const express=require("express");

const router=express.Router();

router.use("/product",require("./product"));
router.use("/user",require("./user"));
router.use("/category",require("./category"));
router.use("/cart",require("./cart"));
router.use("/order",require("./order"));

module.exports = router;