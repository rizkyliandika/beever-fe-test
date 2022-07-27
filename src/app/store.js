import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../features/quotes/qoutesSlice';

export const store = configureStore({
  reducer: {
    quote: quotesReducer
  },
});
