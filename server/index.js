const express=require("express");
const Router=express.Router()
const cors = require("cors");

const { connection } = require("./database/db");
const { UserRouter } = require("./controller/user.routes");
const { productRouter } = require("./controller/product.routes");

const app=express()
require("dotenv").config()
app.use(cors())

app.use(express.json())


app.use("/user",UserRouter)
app.use("/product",productRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("server connected to db");
    }catch(err){
        console.log(err);
    }
    console.log(`server is running ${process.env.port}`);
})

