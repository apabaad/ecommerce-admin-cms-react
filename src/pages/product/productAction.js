import {
  resPending,
  getProducts,
  getSingleProduct,
  resFail,
  deleteProductSuccess,
  addProductSuccess,
} from './productSlice';
import { fetchProduct, deleteProduct, addProduct } from '../../apis/productApi';
import { newAccessJWT } from '../../apis/tokenApi';
import { userLogOut } from '../admin-user/userAction';

export const getProductsAction = () => async (dispatch) => {
  dispatch(resPending());

  const data = await fetchProduct();

  //=== re auth
  if (data.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(getProductsAction());
    } else {
      dispatch(userLogOut());
    }
  }
  //=== re auth
  if (data.status === 'success') {
    return dispatch(getProducts(data.result));
  }

  dispatch(resFail(data));

  //   OR with ternery operator
  // data.status === 'success'
  //   ? data.result.length && dispatch(getProducts(data.result))
  //   : dispatch(resFail(data));
};
export const getSingleProductAction = (slug) => async (dispatch) => {
  dispatch(resPending());

  const data = await fetchProduct(slug);

  //=== re auth
  if (data.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(getSingleProductAction(slug));
    } else {
      dispatch(userLogOut());
    }
  }
  //=== re auth
  if (data.status === 'success') {
    return dispatch(getSingleProduct(data.result));
  }

  dispatch(resFail(data));

  //   OR with ternery operator
  // data.status === 'success'
  //   ? data.result.length && dispatch(getProducts(data.result))
  //   : dispatch(resFail(data));
};

export const deleteProductsAction = (_id) => async (dispatch) => {
  dispatch(resPending());

  const data = await deleteProduct(_id);

  //=== re auth
  if (data.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(deleteProductsAction());
    } else {
      dispatch(userLogOut());
    }
  }
  //=== re auth
  if (data.status === 'success') {
    dispatch(deleteProductSuccess());
    return dispatch(getProductsAction());
  }

  dispatch(resFail(data));
};

export const AddProductsAction = (prodInfo) => async (dispatch) => {
  dispatch(resPending());

  const data = await addProduct(prodInfo);

  //=== re auth
  if (data.message === 'jwt expired') {
    const token = await newAccessJWT();

    if (token) {
      dispatch(AddProductsAction());
    } else {
      dispatch(userLogOut());
    }
  }
  //=== re auth
  if (data.status === 'success') {
    dispatch(addProductSuccess());
    return dispatch(getProductsAction());
  }

  dispatch(resFail(data));
};
