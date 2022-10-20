import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
