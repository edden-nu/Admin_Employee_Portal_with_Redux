import bcrypt from "bcrypt";
import User from "../models/User.js";

// POST /api/auth/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 基本欄位檢查
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // 找 user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // 比對密碼
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // 拿掉 password 後回傳
    const safeUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      type: user.type, // 🔥 之後用這個做 admin / employee 判斷
    };

    return res.json({ user: safeUser });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Server error." });
  }
};
