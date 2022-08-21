const User = require("../models/User");
const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if (!token) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  const decoded = await jwt.verify(token, process.env.secretOrKey);
  if (!decoded) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  // find user
  const user = await User.findOne({id: decoded.userId });
  console.log(user);
  if (!user.role =="Admin") {
    return res.status(402).json("unauthorizeddddd");
  }
  next();
};
module.exports = isAdmin;
