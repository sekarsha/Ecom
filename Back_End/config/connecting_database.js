const mongoose=require("mongoose");


const connectdatabase=async()=>{
  
await mongoose.connect(process.env.MONGO_URI).then((con)=>{

        console.log("Mongo db is connected"+con.connection.host);
    })

}

module.exports=connectdatabase;