import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from './reddit';

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        setSubreddits(state, action) {
            state.subreddits = action.payload;
        },
        getSubredditList(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditListSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditListFailed(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const { setSubreddits, getSubredditList, getSubredditListSuccess, getSubredditListFailed } = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubredditList = () => async (dispatch) => {
    try {
        dispatch(getSubredditList());
        const subreddits = await getSubreddits();
        dispatch(getSubredditListSuccess(subreddits));
    } catch (error) {
        dispatch(getSubredditListFailed());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
