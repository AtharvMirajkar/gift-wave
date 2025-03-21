import { configureStore } from '@reduxjs/toolkit';
import giftCardReducer from './giftCardSlice';

export const store = configureStore({
  reducer: {
    giftCard: giftCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;