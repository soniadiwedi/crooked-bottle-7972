const express=require("express")
const cors = require("cors");

const { connection } = require("./database/conn");

require("dotenv").config()
const { productRouter } = require("./controllers/product.routes");
const routes = require("./controllers/user.routes");
const port= process.env.PORT||8080
const app=express()

app.use(cors())

app.use(express.json())


app.use("/user",routes)
// app.use("/product",productRouter)
app.listen(port,()=>{
    console.log(`server is running ${port}`);
    connection()
})

