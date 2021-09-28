import {
  reqPending,
  reqFail,
  fetchCategoriesSuccess,
  addCatSuccess,
  deleteCatSuccess,
  updateCatSuccess,
} from './categorySlice';
import {
  addCategory,
  fetchCategory,
  deleteCategory,
  updateCategory,
} from '../../apis/categoryApi';

// get categories
export const getCategories = () => async (dispatch) => {
  dispatch(reqPending());
  // call api
  const result = await fetchCategory();
  console.log(result);

  if (result?.status === 'success') {
    return dispatch(fetchCategoriesSuccess(result.categories));
  }
};

// add category

export const addNewCat = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await addCategory(catObj);

  if (result.status === 'success') {
    dispatch(addCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};

// delete category

export const deleteCat = (catId) => async (dispatch) => {
  dispatch(reqPending());
  const result = await deleteCategory(catId);

  if (result.status === 'success') {
    dispatch(deleteCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};

// update category

export const categoryUpdate = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await updateCategory(catObj);

  if (result.status === 'success') {
    dispatch(updateCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};
