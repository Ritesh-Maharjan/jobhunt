const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");

const verifyToken = asyncHandler(async (req, res, next) => {

  // Checking if JWT token was sent or not
  if(!req.headers.authorization) return res.json({"msg": "Please login as JWT is required"})
  // Splitting to get only token from Bearer tokenNumber
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

  req.id = decoded.id;
  next();
});

module.exports = { verifyToken };
