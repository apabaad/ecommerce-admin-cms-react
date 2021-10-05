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

import { newAccessJWT } from '../../apis/tokenApi';
import { userLogOut } from '../admin-user/userAction';
// get categories
export const getCategories = () => async (dispatch) => {
  dispatch(reqPending());
  // call api
  const result = await fetchCategory();
  console.log(result);

  //=== reauthorization by getting new token
  if (result.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(getCategories());
    } else {
      dispatch(userLogOut());
    }
  }
  //====== re auth

  if (result?.status === 'success') {
    return dispatch(fetchCategoriesSuccess(result));
  }
  dispatch(reqFail(result));
};

// add category

export const addNewCat = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await addCategory(catObj);
  //=== re auth
  if (result.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(addNewCat(catObj));
    } else {
      dispatch(userLogOut());
    }
  }
  //====== re auth

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
  //=== re auth
  if (result.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(getCategories());
    } else {
      dispatch(userLogOut());
    }
  }
  //====== re auth

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
  //reauthorization after getting new access token
  if (result.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(getCategories());
    } else {
      dispatch(userLogOut());
    }
  }
  //====== re auth

  if (result.status === 'success') {
    dispatch(updateCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};
