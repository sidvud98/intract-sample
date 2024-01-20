import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import data from './data';

const store = configureStore({
  reducer: { data },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger())
});

export default store;



