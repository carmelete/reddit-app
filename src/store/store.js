import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from '../features/reddit/redditSlice';

export const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
  }),
});

export default store;
