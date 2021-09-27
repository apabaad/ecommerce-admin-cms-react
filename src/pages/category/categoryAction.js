import {
  reqPending,
  reqFail,
  fetchCategoriesSuccess,
  addCatSuccess,
} from './categorySlice';
import { addCategory, fetchCategory } from '../../apis/categoryApi';

export const getCategories = () => async (dispatch) => {
  dispatch(reqPending());
  // call api
  const result = await fetchCategory();
  console.log(result);

  if (result?.status === 'success') {
    return dispatch(fetchCategoriesSuccess(result.categories));
  }
};

const addNewCat = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await addCategory(catObj);

  if (result.status === 'success') {
    return dispatch(addCatSuccess(result));
  }
  dispatch(reqFail(result));
};
