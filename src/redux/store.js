import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todo/slice';

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'));
  }
};

const store = configureStore({
  reducer: todoSlice.reducer,
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
