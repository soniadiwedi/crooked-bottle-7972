const express=require("express")
const UserRouter=express.Router()
const jwt=require("jsonwebtoken")
const { UserModel } = require("../models/user.model")
const bcrypt=require("bcrypt")
const { signup, login } = require("../middleware/Authmiddleware")

//---------Signup Route-----------------
UserRouter.use("/signup",signup)
UserRouter.post("/signup",async(req,res)=>{
    const {username,email,password,dob,role,location,confirm_password}=req.body
    console.log(req.body);
    try{
        const newuser=await UserModel.findOne({username})
        if(newuser){
            res.send("user has been alredy register")
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                const user=new UserModel({username,password:hash,dob,email,role,location})
                await user.save()
                res.status(200).send({"msg":"Register successfull"})
               
            })
        }
    }catch(err){
        res.status(500).json({msg:err.message})
    }
})


UserRouter.use("/login",login)
UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    res.status(200).send({"msg":"Login Successfull","token":jwt.sign({"userId":user._id},"mona")})
                }else{
                    res.status(400).send({"msg":"wrong password"})
                }
            })
        }else{
            res.status(200).send({"msg":"user not found"})
        }
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})
module.exports={UserRouter}


// {
//     "username":"Sonia",
//     "email": "sonia@gmail.com",
//    "dob":"25-06-1998",
//    "role":"student",
//    "location":"Delhi",
//     "password": "123",
//     "confirm_password":"123"
//   }