const express = require("express");
const productRouter = express.Router();

const { products } = require("../constant/products");
const { ProductModel } = require("../models/product.model");

// productRouter.post("/", async (req, res) => {
//   try {
    
//     await ProductModel.deleteMany({});
//     const data = await ProductModel.insertMany(products);
//     res.json(data);
//     console.log(`data has been added ${data}`);
//   } catch (err) {
//     console.log({ msg: err.message });
//   }
// });
//--------Product added-------------------
productRouter.post("/add",async(req,res)=>{
  const data=req.body
  try{
    const newdata=new ProductModel(data)
    await newdata.save()
    res.status(200).json(newdata)

  }catch(err){
    res.status(400).send({"msg":err.message})
  }
})

productRouter.get("/",async(req,res)=>{
  let query={};
  const {sort,order}=req.query;
  // console.log("12",sort,order);
  if(sort){
    query['price.mrp']=order?order:"asc"
  }
  console.log(query);
  try{
    const alldata=await ProductModel.find().sort(query)
    res.status(200).send({"msg":"we are getting data","data":alldata})

  }catch(err){
    res.status(400).send({"msg":"something went wrong"})

  }
})


productRouter.get("/single/:id",async(req,res)=>{
  const id=req.params.id

  try{
    const alldata=await ProductModel.findById({_id:id}) 
    res.status(200).send({"msg":"we are getting data","data":alldata})

  }catch(err){
    res.status(400).send({"msg":"something went wrong"})

  }
})
module.exports = { productRouter };
