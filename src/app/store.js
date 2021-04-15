import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice';


export const store = configureStore({
  reducer: {
    // It's like an onion
    mail: mailReducer,
    user: userReducer,
  },
});
