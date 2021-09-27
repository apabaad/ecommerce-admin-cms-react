import { configureStore } from '@reduxjs/toolkit';
import adminUserReducer from './pages/admin-user/userSlice.js';
import categoryReducer from './pages/category/categorySlice';

const store = configureStore({
  reducer: {
    user: adminUserReducer,
    category: categoryReducer,
  },
});

export default store;
