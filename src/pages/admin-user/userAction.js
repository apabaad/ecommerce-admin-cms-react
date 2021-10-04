import {
  resPending,
  registrationSuccess,
  resFail,
  emailVerificationSuccess,
  loginSuccess,
  autoLogin,
  logOutUserSuccess,
} from './userSlice';
import {
  createNewUser,
  loginAdmin,
  verifyNewUserEmail,
} from '../../apis/userApi.js';
import EmailVerification from '../email-verification/EmailVerification';

import { newAccessJWT } from '../../apis/tokenApi';

export const createUser = (userInfo) => async (dispatch) => {
  dispatch(resPending());

  //   callapi
  const result = await createNewUser(userInfo);

  result.status === 'success'
    ? dispatch(registrationSuccess(result))
    : dispatch(resFail(result));
};

export const verifyUserEmail = (userInfo) => async (dispatch) => {
  dispatch(resPending());

  //   call api
  const result = await verifyNewUserEmail(userInfo);
  dispatch(emailVerificationSuccess(result));
};

export const adminLogin = (loginInfo) => async (dispatch) => {
  dispatch(resPending());

  // call api
  const result = await loginAdmin(loginInfo);
  console.log(result, 'new');
  if (result.status === 'success') {
    window.sessionStorage.setItem('accessJWT', result.tokens?.accessJWT); //for 15mins
    window.localStorage.setItem('refreshJWT', result.tokens?.refreshJWT); //to request new token from browser if it expires
    return dispatch(loginSuccess(result.user));
  }
  dispatch(resFail(result));
};

export const autoLoginAction = () => async (dispatch) => {
  const accessJWT = window.sessionStorage.getItem('accessJWT');
  const refreshJWT = window.localStorage.getItem('refreshJWT');
  // 1. auto login when we have both the jwt
  if (accessJWT && refreshJWT) {
    // update redux state isLoggedIn to true
    return dispatch(autoLogin());
  }

  //. 2. auto login when we have refreshJWT only
  if (!accessJWT && refreshJWT) {
    const data = await newAccessJWT();
    console.log(data);

    if (data?.accessJWT) {
      window.sessionStorage.setItem('accessJWT', data.accessJWT);
      return dispatch(autoLogin());
    }
  }

  //3. logout user by calling logout fun
};

export const userLogOut = () => (dispatch) => {
  window.sessionStorage.removeItem('accessJWT');
  window.localStorage.removeItem('refreshJWT');

  dispatch(logOutUserSuccess());
};
