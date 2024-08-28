const express=require("express");
const { getproduct, getsingle_product } = require("../Controll/product_controll");
const router=express.Router();

router.route("/product").get(getproduct);

router.route("/product/:id").get(getsingle_product);

module.exports=router;