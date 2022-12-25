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
}

export { createUser, login };
