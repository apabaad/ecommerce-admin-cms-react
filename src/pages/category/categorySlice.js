import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPending: false,
  categoryResp: {},
  catList: [],
};

const catSlice = createSlice({
  name: 'catSlice',
  initialState,
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },

    fetchCategoriesSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.catList = payload;
    },
    reqFail: (state, { payload }) => {
      state.isPending = false;
      state.categoryResp = payload;
    },

    addCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryResp = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const { reqPending, reqFail, fetchCategoriesSuccess, addCatSuccess } =
  actions;

export default reducer;
