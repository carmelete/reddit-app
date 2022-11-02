import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from '../features/reddit/redditSlice';
import subredditsReducer from '../features/reddit/subRedditSlice';

export const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subredditsReducer,
  }),
});

export default store;
