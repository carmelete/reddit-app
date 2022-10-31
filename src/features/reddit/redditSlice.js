import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from './reddit';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: 'r/pics/',
};

export const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    getPosts(state) {
      state.isLoading = true;
      state.error = false;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { setPosts, getPosts, getPostsSuccess, getPostsFailed } = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch)  => {
  try {
    dispatch(getPosts());
    const posts = await getSubredditPosts(`/r/${subreddit}`);
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};
