const express = require("express");
const { getUser, updateUser, deleteUser } = require("../controller/user");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router
  .all("")
  .get("/", verifyToken, getUser)
  .put("/", verifyToken, updateUser)
  .delete("/", verifyToken, deleteUser);

module.exports = router;
