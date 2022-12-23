const express = require("express");
const { signup, login, changePassword } = require("../controller/auth");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../util/multerHelper");

const upload = multer({ storage: storage });

router
  .all("")
  .post("/signup", upload.single("avatar"), signup)
  .post("/login", login)
  .post("/changepassword", verifyToken, changePassword);

module.exports = router;
