import React, { useEffect} from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Subreddits } from './components/Subreddits/Subreddits';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, fetchPosts, selectFilteredPosts, setSearchTerm } from './features/reddit/redditSlice';
import { fetchSubredditList } from './features/reddit/subRedditSlice';


function App() {
  const dispatch = useDispatch();

  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;

  const posts = useSelector(selectFilteredPosts);

  useEffect(() => {
    dispatch(fetchPosts('/r/pics/'));
    dispatch(fetchSubredditList());
  }, []);

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center mt-8">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-500">
          No posts matching "{searchTerm}"
        </h2>
        <button
          type="button"
          className="w-32 h-12 text-white bg-orange-400 rounded-md"
          onClick={() => dispatch(setSearchTerm(''))}
        >
          Go home
        </button>
      </div>
    );
  }

  if(error) {
    <div className="flex flex-col items-center justify-center">
      <h2>
        Failed to load posts.
      </h2>
      <button
        type="button"
        onClick={() => dispatch(fetchPosts(selectedSubreddit))}
      >
        Try again
      </button>
    </div>
  }

  return (
    <div className="App">
      <Header />
      <div className="flex">
        <main className="w-9/12">
          {posts.map((post, index) => (
              <Card
                key={post.id}
                post={post}
                onToggleComments={onToggleComments(index)}
              />
            ))}
        </main>
        <aside className="w-3/12">
          <Subreddits
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
