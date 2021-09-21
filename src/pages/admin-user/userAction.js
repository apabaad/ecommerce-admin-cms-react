import {
  resPending,
  registrationSuccess,
  resFail,
  emailVerificationSuccess,
} from './userSlice';
import { createNewUser, verifyNewUserEmail } from '../../apis/userApi.js';
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
