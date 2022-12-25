import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Calling POST method of /auth/signup to create user
const getAllUser = async (data) => {
  try {
    const allJobs = await axios.get(`${SERVER_URL}/job?search=${data}`);
    return allJobs;
  } catch (err) {
    return err;
  }
};


export { getAllUser };
