import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/app.css';
import { Child } from './components/Child';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-6xl text-gray-500">
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Child/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
