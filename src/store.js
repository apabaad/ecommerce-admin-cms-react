import { configureStore } from '@reduxjs/toolkit';
import adminUserReducer from './pages/admin-user/userSlice.js';

const store = configureStore({
  reducer: {
    user: adminUserReducer,
  },
});

export default store;
