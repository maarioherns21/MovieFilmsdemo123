import User from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const secret = 'test';

export const index = async (req, res) => {
  try {
    const data = await User.find();

    res.status(200).json(data);
  } catch (error) {
    res.statu(401).json({ message: error.message });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
   
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });
      
    console.log(user, token)
    res.status(200).json({ result: user, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// const {firstName,lastName,phoneNumber,birthday ,address, gender, username, email, password, photoUrl, bio } = req.body

export const signup = async (req, res) => {
  const user = req.body
  try {
    const oldUser = await User.findOne({ email: req.body.email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash( req.body.password, 12);
    
    console.log(hashedPassword)
    const result = await User.create({ ...user , password: hashedPassword });

    
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    console.log(token, result)
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteData = await User.findByIdAndDelete(id);

    res.status(201).json(deleteData);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};