import './App.css';
import React from 'react';
import { WordleHome } from './Components/Home';
import {Header} from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <WordleHome />
    </div>
  );
}

export default App;
