import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPending: false,
  regResp: {},
  emailVerificationResp: {},
  isLoggedIn: false,
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
    loginSuccess: (state) => {
      state.isLoggedIn = true;
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
} = actions;
export default reducer;
