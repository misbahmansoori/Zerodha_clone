const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ user: null });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ user: null });
    }

    // ✅ IMPORTANT: return FULL user object
    return res.json({ user });
  } catch (error) {
    return res.status(401).json({ user: null });
  }
};
