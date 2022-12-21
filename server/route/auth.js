const express = require("express");
const { signup, login, changePassword } = require("../controller/auth");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router
  .all("")
  .post("/signup", signup)
  .post("/login", login)
  .post("/changepassword", verifyToken, changePassword);

module.exports = router;
