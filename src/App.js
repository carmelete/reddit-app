import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Subreddits } from './components/Subreddits/Subreddits';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <main className="w-9/12">
          <Card />
        </main>
        <aside className="w-3/12">
          <Subreddits />
        </aside>
      </div>
    </div>
  );
}

export default App;
