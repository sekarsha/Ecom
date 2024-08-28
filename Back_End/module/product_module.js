const mongoose=require("mongoose");



const prduct_schema= new mongoose.Schema({

    name:String,
    price:String,
    description:String,
    rating:String,
    images:String,
    category:String,
    seller:String,
    stock:String,
    numofReviews:String,
    createdAT:Date
})

const product_model=mongoose.model("Prduct",prduct_schema);
module.exports=product_model;