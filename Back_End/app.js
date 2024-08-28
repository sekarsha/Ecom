const express=require("express");
const app=express();
const dotenv=require("dotenv")
const path=require("path")
const cors=require("cors")
const connectdatabase=require("./config/connecting_database")

dotenv.config({path:path.join(__dirname,"config","config.env")})

const products=require("./Routes/product");
const orders=require("./Routes/order")

connectdatabase()
app.use(cors());
app.use(express.json())
app.use("/api/v1/",products);
app.use("/api/v1/",orders);


app.listen(process.env.PORT,()=>{console.log(`${process.env.PORT} Server is rumming ${process.env.NODE_ENV} `)})