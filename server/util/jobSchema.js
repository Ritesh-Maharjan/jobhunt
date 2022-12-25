const yup = require("yup");

const createJobSchema = yup.object({
  body: yup.object({
    jobTitle: yup.string("Job title is required").required(),
    jobCategory: yup.string("").required(),
    jobType: yup
      .mixed("Must be one of Job seeker or Company")
      .oneOf(["Full Time", "Part Time", "Intern"])
      .required(),
    salary: yup.string("Job title is required").required(),
    deadline: yup.date("Job title is required").required(),
    education: yup
      .mixed("Must be one of Job seeker or Company")
      .oneOf(["High school", "Bachelor", "Master", "Phd"])
      .required(),
  }),
});

const updateJobSchema = yup.object({
  body: yup.object({
    jobTitle: yup.string("Job title is required").required(),
    jobCategory: yup.string("").required(),
    jobType: yup
      .mixed("Must be one of Job seeker or Company")
      .oneOf(["Full Time", "Part Time", "Intern"])
      .required(),
    salary: yup.string("Job title is required").required(),
    deadline: yup.date("Job title is required").required(),
    education: yup
      .mixed("Must be one of Job seeker or Company")
      .oneOf(["High school", "Bachelor", "Master", "Phd"])
      .required(),
  }),
});

module.exports = {
  createJobSchema,
  updateJobSchema
};
