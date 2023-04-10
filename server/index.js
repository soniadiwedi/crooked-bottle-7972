const express=require("express")
const cors = require("cors");

const { connection } = require("./database/conn");

const { productRouter } = require("./controllers/product.routes");
const routes = require("./controllers/user.routes");

const app=express()
require("dotenv").config()
app.use(cors())

app.use(express.json())


app.use("/user",routes)
// app.use("/product",productRouter)
app.listen(process.env.PORT||3000,async()=>{
    try{
        await connection
        console.log("server connected to db");
    }catch(err){
        console.log(err);
    }
    console.log(`server is running ${process.env.PORT||3000}`);
})

