import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL

const createUser =  async (data) => {

    const user = await axios.post(`${SERVER_URL}/auth/signup`, data)

    return user;

    // console.log(user)
}

export {createUser}