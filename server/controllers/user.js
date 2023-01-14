import User from "../models/user.js";


export const index = async (req, res) => {
  try {
    const data = await User.find();

    res.status(200).json(data);
  } catch (error) {
    res.statu(401).json({ message: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Credentials not valid" });

    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};


export const signup = async (req, res) => {
  try {
    const user = req.body;

    const data = new User({ ...user });

    const saveData = await data.save();

    res.status(200).json(saveData);
  } catch (error) {
    res.status(401).json({ error: error.message });
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