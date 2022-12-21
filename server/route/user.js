const express = require("express");
const getUser = require("../controller/user").getUser;
const router = express.Router();

router.all("").get("/", getUser);

module.exports = router;
