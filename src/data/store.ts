import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './slicer/roomSlicer';
import userReducer from './slicer/userSlicer';

export const store = configureStore({
  reducer: {
    userReducer,
    roomReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
