import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  { 
    firstName: String, 
    lastName: String,
    phoneNumber: Number,
    birthday: String,
    address: String, 
    gender: String,
    username: String,
    email: String,
    password: String,
    photoUrl: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
