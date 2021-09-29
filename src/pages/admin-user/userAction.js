import {
  resPending,
  registrationSuccess,
  resFail,
  emailVerificationSuccess,
  loginSuccess,
} from './userSlice';
import {
  createNewUser,
  loginAdmin,
  verifyNewUserEmail,
} from '../../apis/userApi.js';
import EmailVerification from '../email-verification/EmailVerification';

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
    return dispatch(loginSuccess(result.user));
  }
  dispatch(resFail(result));
};
