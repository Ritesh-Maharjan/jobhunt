const { application } = require("express");
const asyncHandler = require("express-async-handler");
const Application = require("../model/Application");
const Job = require("../model/Job");
const User = require("../model/User");

/**
 * getAlljob:  RESTful GET request returning all job objects
 */
const getAllJobs = asyncHandler(async (req, res, next) => {
  const job = await Job.find({});
  res.json(job);
});

/**
 * getJob:  RESTful GET request returning a particular job object
 * @param id: string
 */
const getJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const job = await Job.findById(id);
  if (!job) return res.json({ msg: "No job found with that id" });
  res.json(job);
});

/**
 * createJob:  RESTful POST request returning JSON object
 * @param body: object
 */
const createJob = asyncHandler(async (req, res, next) => {
  const { jobTitle, jobCategory, jobType, salary, deadline, education } =
    req.body;

  const userId = req.user.id;
  if (
    !jobTitle ||
    !jobCategory ||
    !jobType ||
    !salary ||
    !deadline ||
    !education
  )
    return res.json({ msg: "All required fields are missing" });

  const user = await User.findById(userId).select(["name", "avatar", "-_id"]);
  const job = await Job.create({ ...req.body, createdBy: user });

  if (job) return res.json({ msg: "job created successfully" });
});

/**
 * updateJob:  RESTful PUT request returning JSON object
 * @param id: string
 */
const updateJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(req.user);
  console.log(id);
  const job = await Job.findByIdAndUpdate(id, req.body);

  if (!job) return res.json({ msg: "No job found with that id" });
  res.json({ msg: "Updated successfully" });
});

/**
 * deleteJob:  RESTful DELETE request returning JSON object
 * @param id: string
 */
const deleteJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);

  if (!job) return res.json({ msg: "No job found with that id" });
  res.json({ msg: "Deleted successfully" });
});

/**
 * applyJob:  RESTful POST request returning JSON object
 * @param id: string
 */
const applyJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const applied = await Application.create({ jobId: id, userId: req.user.id });

  if (applied) res.json({ msg: "Applied to job successfully" });
});

/**
 * applications:  RESTful GET request returning all application objects
 */
const applications = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  const allApplicaton = await Application.find({
    userId: req.user.id,
  }).populate("jobId");

  if (allApplicaton) return res.json(allApplicaton);
});

/**
 * jobApplied:  RESTful GET request returning a particular job object
 * @param id: string
 */
const jobApplied = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const allApplicaton = await Application.find({
    userId: req.user.id,
    jobId: id,
  });
  console.log(allApplicaton);

  if (allApplicaton.length === 0) return res.send(false);

  return res.send(true);
});

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  applyJob,
  applications,
  jobApplied,
};
