import axios from 'axios';
const baseUrl = '/api/blogs';

let token;

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);

  //  const response = await axios.get(baseUrl);
  //  return response.data;
};

const setToken = receivedToken => {
  token = receivedToken;
  return token;
};

export default { getAll, setToken };
