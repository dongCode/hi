import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/pages/counter/counterSlice';
import authSlice from '@/store/authSlice';
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;
