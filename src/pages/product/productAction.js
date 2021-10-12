import {
  resPending,
  getProducts,
  getSingleProduct,
  resFail,
} from './productSlice';
import { fetchProduct } from '../../apis/productApi';
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
    return data.result.length && dispatch(getProducts(data.result));
  }

  dispatch(resFail(data));

  //   OR
  // data.status === 'success'
  //   ? data.result.length && dispatch(getProducts(data.result))
  //   : dispatch(resFail(data));
};
