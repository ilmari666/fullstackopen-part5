import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);

  //  const response = await axios.get(baseUrl);
  //  return response.data;
};

const create = async blogObj => {
  const config = {
    headers: { Authorization: token }
  };
  const response = await axios.post(baseUrl, blogObj, config);
  return response.data;
};

const setToken = receivedToken => {
  token = `Bearer ${receivedToken}`;
  return token;
};

const removeToken = () => {
  token = null;
};

export default { create, getAll, setToken, removeToken };
