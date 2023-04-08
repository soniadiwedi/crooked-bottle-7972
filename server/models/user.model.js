const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
    role: { type: String, required: true, enum: ["Admin", "Explorer","student","teacher"] },
    location: { type: String, required: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {UserModel};