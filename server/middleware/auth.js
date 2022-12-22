const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const Job = require("../model/Job");

const verifyToken = asyncHandler(async (req, res, next) => {
  // Checking if JWT token was sent or not
  if (!req.headers.authorization)
    return res.json({ msg: "Please login as JWT is required" });
  // Splitting to get only token from Bearer tokenNumber
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

  req.user = { id: decoded.id, roles: decoded.roles };
  next();
});

const isCompany = asyncHandler(async (req, res, next) => {
  if (req.user?.roles !== "Company")
    return res.status(403).json({ msg: "Not authorized" });
  next();
});

// checking if the user is job seeker
const isJobSeeker = asyncHandler(async (req, res, next) => {
  if (req.user?.roles !== "Job seeker")
    return res.status(403).json({ msg: "Not authorized" });
  next();
});

// checking if the user is admin
const isAdmin = asyncHandler(async (req, res, next) => {
  console.log(req.user.roles)
  if (req.user?.roles !== "Admin")
    return res.status(403).json({ msg: "Not authorized" });
  next();
});

// checking if the job is created by same user before doing anything to the job
const isOwner = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(req.user.id);
  const job = await Job.findById(id);

  if (user.name !== job.createdBy.name)
    return res.status(403).json({ msg: "Unable to access this request" });

  next();
});




module.exports = { verifyToken, isCompany, isOwner, isJobSeeker, isAdmin };
