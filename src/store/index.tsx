import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authMiddleware from '../middleware/authMiddleware';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authMiddleware, logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
