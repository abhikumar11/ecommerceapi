const express=require("express");
const { getProductById,getProductByCatId } = require("../controllers/product");
const router=express.Router();

router.get("/:proid",getProductById);
router.get("/category/:catid",getProductByCatId);

module.exports = router;