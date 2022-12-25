import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const token = localStorage.getItem("user");

// Calling POST method of /auth/signup to create user
const getAllJobs = async (data) => {
  try {
    const allJobs = await axios.get(`${SERVER_URL}/job?search=${data}`);
    return allJobs;
  } catch (err) {
    return err;
  }
};

// Calling POST method of /auth/signup to create user
const getJob = async (data) => {
  try {
    const allJobs = await axios.get(`${SERVER_URL}/job/${data}`);
    return allJobs;
  } catch (err) {
    return err;
  }
};

const adminDeleteJob = async (data) => {
    console.log(`Bearer ${token}`)
  try {
    const allJobs = await axios.delete(`${SERVER_URL}/admin/jobs/${data}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return allJobs;
  } catch (e) {}
};
export { getAllJobs, getJob, adminDeleteJob };
