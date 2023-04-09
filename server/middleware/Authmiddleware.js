const userModel = require("../model/user");
const jwt = require("jsonwebtoken");


const signup = (req, res, next) => {
  const { username, email, dob, role, location, password, confirm_password } =
    req.body;

  if (
    !username ||
    !email ||
    !dob ||
    !role ||
    !location ||
    !password ||
    !confirm_password
  ) {
    res.status(206).send({ msg: "Invalid Data" });
    return;
  }

  if (
    typeof username !== "string" ||
    typeof email !== "string" ||
    typeof dob !== "string" ||
    typeof role !== "string" ||
    typeof location !== "string" ||
    typeof password !== "string" ||
    typeof confirm_password !== "string"
  ) {
    res.status(206).send({ msg: "Invalid Data" });
    return;
  }
  if (password !== confirm_password) {
    res.status(206).send({ msg: "Password and Confirm Password is not same" });
    return;
  }
  next();
};


const login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(206).send({ msg: "Invalid Credentials" });
    return;
  }

  next();
};


//***************AUTHmiddleware*************** */
const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    
    if(token){
        const decoded=jwt.verify(token,"mona")
        if(decoded){
            req.body.userId=decoded.userId
            next()
        }else{
            res.status(400).send({"msg":"Please login first"})
        }
    }else{
        res.status(400).send({"msg":"Please login first"})

    }
}
module.exports = {
    signup,
    login,
  };