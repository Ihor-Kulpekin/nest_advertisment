import axios from "axios";
import { apiUrl } from "../constants/constants";

export const register = async (payload) => {
  const response = await axios.post(`${apiUrl}/users`,  payload);

  return response.data;
}

export const loginUser = async (payload) => {
  const response = await axios.post(`${apiUrl}/account/login`,  payload);
  console.log('response', response);
  return response.data;
}

export const profileInfo = async (token) => {
  const response = await axios.get(`${apiUrl}/account/info`,  {
    headers: {
      token
    }
  });

  return response.data;
}

export const changePassword = async (token, password) => {
  const response = await axios.post(`${apiUrl}/account/change-password`,  {
    password
  }, {
    headers: {
      token
    }
  });

  return response.data;
}
