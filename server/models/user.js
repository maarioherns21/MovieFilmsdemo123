import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {  
    email: {type:String , unique: true},
    password: String,
    givenName: String,
    familyName: String,
    phoneNumber: Number,
    birthday: String,
    address: String,
    gender: String,
    username: String,
    imageUrl: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
