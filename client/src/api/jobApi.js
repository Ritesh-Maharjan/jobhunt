import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const getAllJobs = async (search, token) => {
  let allJobs;
  try {
    if (token) {
      allJobs = await axios.get(`${SERVER_URL}/job?search=${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      allJobs = await axios.get(`${SERVER_URL}/job?search=${search}`);
    }
    return allJobs;
  } catch (err) {
    return err;
  }
};

const getJob = async (data, token) => {
  try {
    const allJobs = await axios.get(`${SERVER_URL}/job/${data}`);
    return allJobs;
  } catch (err) {
    return err;
  }
};

const adminDeleteJob = async (data, token) => {
  try {
    const allJobs = await axios.delete(`${SERVER_URL}/admin/jobs/${data}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return allJobs;
  } catch (e) {
    console.log(e)
  }
};

const deleteJob = async (data,token) => {
  try {
    const allJobs = await axios.delete(`${SERVER_URL}/job/${data}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return allJobs;
  } catch (e) {
    return e
  }
}

const applyJob = async (data,token) => {
  try {
    const apply = await axios.post(`${SERVER_URL}/job/${data}/apply`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return apply;
  } catch (e) {
    return e
  }
}

const isApplied = async (data,token) => {
  try{
    const apply = await axios.get(`${SERVER_URL}/job/${data}/applied`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return apply;
  }
  catch(e){
    return e
  }
}

export { getAllJobs, getJob, adminDeleteJob, deleteJob, applyJob, isApplied };
