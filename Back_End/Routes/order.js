const express=require("express");
const { getorder } = require("../Controll/order_controll");
const router=express.Router();

router.route("/order").post(getorder)

module.exports=router