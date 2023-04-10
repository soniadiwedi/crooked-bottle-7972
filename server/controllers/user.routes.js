const express = require("express");
const { UserModel } = require("../model/user");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { signup, login } = require("../middleware/Authmiddleware");

//---------Signup Route-----------------
routes.use("/signup", signup);
routes.post("/signup", async (req, res) => {
  const { username, email, password, dob, role, location, confirm_password } =
    req.body;
  console.log(req.body);
  try {
    const newuser = await UserModel.findOne({ username });
    if (newuser) {
      res.send("user has been already registered");
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = new UserModel({
          username,
          password: hash,
          dob,
          email,
          role,
          location,
        });
        await user.save();
        res.status(200).send({ msg: "Register successful" });
      });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

routes.use("/login", login);
routes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "Login successful",
            token: jwt.sign({ userId: user._id }, "mona"),
          });
        } else {
          res.status(400).send({ msg: "Wrong password" });
        }
      });
    } else {
      res.status(200).send({ msg: "User not found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = routes;