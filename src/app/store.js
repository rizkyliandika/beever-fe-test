import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import quotesReducer from '../features/quotes/qoutesSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    quote: quotesReducer
  },
});
