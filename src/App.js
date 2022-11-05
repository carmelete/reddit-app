import React, { useEffect} from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Subreddits } from './components/Subreddits/Subreddits';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectFilteredPosts, setSearchTerm } from './features/reddit/redditSlice';
import { fetchSubredditList, selectSubreddits } from './features/reddit/subRedditSlice';


function App() {
  const dispatch = useDispatch();

  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;

  const posts = useSelector(selectFilteredPosts);

  useEffect(() => {
    dispatch(fetchPosts('pics'));
    dispatch(fetchSubredditList());
  }, [dispatch]);

  const noPostMatching = () => {
    return (
      <div className="flex flex-col items-center mt-8">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-500">
          No posts matching "{searchTerm}"
        </h2>
        <button
          type="button"
          onClick={() => dispatch(setSearchTerm(''))}
          className="w-32 h-12 text-white bg-orange-400 rounded-md"
        >
          Go home
        </button>
      </div>
    );
  }


  return (
    <div className="App">
      <Header />
      <div className="flex">
        <main className="w-9/12">
          {posts.length > 0 &&
            reddit.posts.map((post) => (
              <Card
                key={post.id}
                post={post}
              />
            ))
          }
          {!posts.length &&
            noPostMatching()
          }
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
