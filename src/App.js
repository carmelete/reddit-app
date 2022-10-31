import React, { useEffect} from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Subreddits } from './components/Subreddits/Subreddits';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from './features/reddit/redditSlice';


function App() {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;

  useEffect(() => {
    dispatch(fetchPosts('pics'))
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="flex">
        <main className="w-9/12">
          {
            reddit.posts.map((post) =>
              <Card
                key={post.id}
                post={post}

              />
            )
          }
        </main>
        <aside className="w-3/12">
          <Subreddits />
        </aside>
      </div>
    </div>
  );
}

export default App;
