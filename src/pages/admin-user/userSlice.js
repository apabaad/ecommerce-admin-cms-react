import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPending: false,
  regResp: {},
  emailVerificationResp: {},
  isLoggedIn: false,
  user: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    resPending: (state) => {
      state.isPending = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
    resFail: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
    emailVerificationSuccess: (state, { payload }) => {
      state.isPending = false;
      state.emailVerificationResp = payload;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoggedIn = true;
      state.isPending = false;
      state.user = payload;
      state.userResp = '';
    },
    autoLogin: (state) => {
      state.isLoggedIn = true;
    },
    logOutUserSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    getAdminProfile: (state, { payload = [] }) => {
      state.user = payload;
    },
  },
});
const { reducer, actions } = userSlice;

export const {
  resPending,
  registrationSuccess,
  emailVerificationSuccess,
  resFail,
  loginSuccess,
  autoLogin,
  logOutUserSuccess,
  getAdminProfile,
} = actions;
export default reducer;
