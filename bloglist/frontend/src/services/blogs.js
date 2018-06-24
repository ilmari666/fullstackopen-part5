import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response;
  } catch ({ response }) {
    return response;
  }
};

const create = async blogObj => {
  const config = {
    headers: { Authorization: token }
  };
  try {
    const response = await axios.post(baseUrl, blogObj, config);
    return response;
  } catch ({ response }) {
    return response;
  }
};

const update = async (id, blogObj) => {
  const config = {
    headers: { Authorization: token }
  };
  try {
    const response = await axios.put(`${baseUrl}/${id}`, blogObj, config);
    return response;
  } catch ({ response }) {
    return response;
  }
};

const remove = async id => {
  const config = {
    headers: { Authorization: token }
  };
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, config);
    return response;
  } catch ({ response }) {
    return response;
  }
};

const setToken = receivedToken => {
  token = `Bearer ${receivedToken}`;
  return token;
};

const removeToken = () => {
  token = null;
};

export default { create, update, remove, getAll, setToken, removeToken };
