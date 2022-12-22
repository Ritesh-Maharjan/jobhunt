const express = require("express");
const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  applyJob,
} = require("../controller/job");
const { verifyToken, isCompany, isOwner } = require("../middleware/auth");
const router = express.Router();

router
  .all("")
  .get("/", getAllJobs)
  .get("/:id", getJob)
  .post("/", verifyToken, isCompany, createJob)
  .put("/:id", verifyToken, isCompany, isOwner, updateJob)
  .delete("/:id", verifyToken, isCompany, isOwner, deleteJob)
  .post("/:id/apply", verifyToken, applyJob);

module.exports = router;
