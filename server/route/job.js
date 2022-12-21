const express = require("express");
const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controller/job");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router
  .all("")
  .get("/", getAllJobs)
  .get("/:id", getJob)
  .post("/", verifyToken, createJob)
  .put("/:id", verifyToken, updateJob)
  .delete("/:id", deleteJob);

module.exports = router;
