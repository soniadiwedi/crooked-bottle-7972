const mongoose=require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', false);


const connection=async()=>{
    try{
        
       await mongoose.connect(process.env.mongoUrl)
        console.log("server connected to db");
    }catch(err){
        console.log(err);
    }
}
module.exports={connection}