import bcrypt from "bcrypt";
import validator from "validator";
import User from "../models/User.js";

// Create User
export const createUser = async (req, res) => {
  try {
    console.log("Received user creation request:", req.body); // Debug log
    const { fullName, email, password, type } = req.body;

    if (!fullName || !email || !password || !type) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (type !== "admin" && type !== "employee") {
      return res.status(400).json({ error: "Invalid user type." });
    }

    if (!validator.isAlpha(fullName.replace(/\s/g, ""), "en-US")) {
      return res.status(400).json({ error: "Name must contain only letters." });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      type,
    });

    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};

// Get All Users (no password)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};
