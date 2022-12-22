const express = require("express");
const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  applyJob,
  applications,
  jobApplied,
} = require("../controller/job");
const { verifyToken, isCompany, isOwner, isJobSeeker } = require("../middleware/auth");
const router = express.Router();

router
  .all("")
  .get("/", getAllJobs)
  .get("/applications", verifyToken, isJobSeeker, applications)
  .get("/:id", getJob)
  .get("/:id/applied", verifyToken, jobApplied)
  .post("/", verifyToken, isCompany, createJob)
  .put("/:id", verifyToken, isCompany, isOwner, updateJob)
  .delete("/:id", verifyToken, isCompany, isOwner, deleteJob)
  .post("/:id/apply", verifyToken, isJobSeeker, applyJob)

module.exports = router;
