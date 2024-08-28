const mongoose=require("mongoose");
const { create } = require("./product_module");


const order_modal=new mongoose.Schema({

     cart:Array,
     amount:String,
     status:String,
     createdAt:Date

})

const ordermodal=mongoose.model("Orders",order_modal)

module.exports=ordermodal