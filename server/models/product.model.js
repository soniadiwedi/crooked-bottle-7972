const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
 
    url:String,
    title:String,
    price:Number,
    catagory:String,
    description:String,
    quantity:Number,
   brand:String
},{
    versionKey:false
})


const ProductModel=mongoose.model("products",productSchema)

module.exports={ProductModel}