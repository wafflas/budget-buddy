const User = require("../models/User");
const jwt = require("jsonwebtoken");

// generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};



// register user
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body || {};
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });
    const safeUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileImageUrl: user.profileImageUrl ?? null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return res
      .status(201)
      .json({ user: safeUser, token: generateToken(user._id) });
  } catch (error) {
    return res.status(500).json({ message: "Error registering user" , error: error.message });
  }
};




// login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const safeUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileImageUrl: user.profileImageUrl ?? null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return res
      .status(200)
      .json({ user: safeUser, token: generateToken(user._id) });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in" , error: error.message });
  }
};

// get user info
exports.getUserInfo = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    return res.status(200).json({ user: req.user });
  } catch (error) {
    return res.status(500).json({ message: "Error getting user info" , error: error.message });
  }
};
