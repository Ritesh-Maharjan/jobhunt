const express = require("express");
const { getUser, updateUser, deleteUser } = require("../controller/user");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../util/multerHelper");

const upload = multer({ storage: storage });

router
  .all("")
  .get("/", verifyToken, getUser)
  .put("/", verifyToken, upload.single("avatar"), updateUser)
  .delete("/", verifyToken, deleteUser);

module.exports = router;
