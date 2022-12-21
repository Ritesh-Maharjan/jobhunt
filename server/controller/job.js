const asyncHandler = require("express-async-handler");
const Job = require("../model/Job");
const User = require("../model/User");

/**
 * getAlljob:  RESTful GET request returning JSON object(s)
 */
const getAllJobs = asyncHandler(async (req, res, next) => {
  const job = await Job.find({});
  res.json(job);
});

/**
 * getJob:  RESTful GET request returning JSON object(s)
 * @param id: string
 */
const getJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const job = await Job.findById(id);
  if(!job) return res.json({"msg": "No job found with that id"})
  res.json(job);
});


/**
 * createJob:  RESTful POST request returning JSON object(s)
 * @param body: object
 */
const createJob = asyncHandler(async (req, res, next) => {
  const { jobTitle, jobCategory, jobType, salary, deadline, education } =
    req.body;

  if (
    !jobTitle ||
    !jobCategory ||
    !jobType ||
    !salary ||
    !deadline ||
    !education
  )
    return res.json({ msg: "All required fields are missing" });

  console.log(req.id);
  const user = await User.findById(req.id).select(["name", "avatar", "-_id"]);
  console.log(user);
  const job = await Job.create({ ...req.body, createdBy: user });

  console.log(job);

  if (job) return res.json({ msg: "job created successfully" });
});

/**
 * updateJob:  RESTful PUT request returning JSON object(s)
 * @param id: string
 */
const updateJob = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body);

    if(!job) return res.json({"msg": "No job found with that id"})
    res.json({"msg": "Updated successfully"});
  });

/**
 * deleteJob:  RESTful DELETE request returning JSON object(s)
 * @param id: string
 */
const deleteJob = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);

    if(!job) return res.json({"msg": "No job found with that id"})
    res.json({"msg": "Deleted successfully"});
  });

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
