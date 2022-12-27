import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Calling POST method of /auth/signup to create user
const createUser = async (data) => {
  try {
    const user = await axios.post(`${SERVER_URL}/auth/signup`, data);
    return user;
  } catch (err) {
    return err;
  }
};

const login = async (data) => {
  try {
    const user = await axios.post(`${SERVER_URL}/auth/login`, data);
    return user;
  } catch (err) {
    return err;
  }
};

const getAllUser = async (data) => {
  try {
    const jobs = await axios.get(`${SERVER_URL}/admin/users`, {
      headers: {
        Authorization: `Bearer ${data}`
      }
    });
    return jobs;
  } catch (err) {
    return err;
  }

};

const deleteUser = async (token, id) => {
  try {
    const users = await axios.delete(`${SERVER_URL}/admin/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return users;
  } catch (err) {
    return err;
  }
};

export { createUser, login, getAllUser, deleteUser };
