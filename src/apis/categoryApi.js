import axios from 'axios';

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'http://localhost:8000';

const catAPI = rootUrl + '/api/v1/category';

export const fetchCategory = async () => {
  try {
    const { data } = await axios.get(catAPI);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error.message,
    };
  }
};

export const addCategory = async (catObj) => {
  try {
    const { data } = await axios.post(catAPI, catObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error.message,
    };
  }
};
