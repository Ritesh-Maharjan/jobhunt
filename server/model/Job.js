const mongoose = require("mongoose");

// const ObjectId = mongoose.Schema.ObjectId;

const JobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    createdBy: {
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
    },
    jobCategory: {
      type: String,
      required: true,
    },
    vacancies: {
      type: Number,
      default: 1,
    },
    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Intern"],
    },
    salary: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    education: {
      type: String,
      enum: ["High school", "Bachelor", "Master", "Phd"],
    },
    experience: {
      type: String,
      default: "Not required",
    },
    otherSpecification: { type: String },
    jobDescription: { type: String },
    benefits: { type: String },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", JobSchema);
