import {
  resPending,
  getProducts,
  getSingleProduct,
  resFail,
  deleteProductSuccess,
} from './productSlice';
import { fetchProduct, deleteProduct } from '../../apis/productApi';
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
