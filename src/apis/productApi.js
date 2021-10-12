import axios from 'axios';

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'http://localhost:8000';
const productAPI = rootUrl + '/api/v1/product';

export const fetchProduct = async (slug) => {
  try {
    const apiEndPoint = slug ? productAPI + '/' + slug : productAPI;
    const { data } = await axios.get(productAPI, {
      headers: {
        Authorization: window.localStorage.getItem('refreshJWT'),
      },
    });
    return data;
  } catch (error) {
    return error?.response?.data || { status: 'error', message: error.message };
  }
};