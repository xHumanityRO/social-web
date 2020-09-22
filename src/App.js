import React from 'react';
import logo from './logoXHumanity-black.jpeg';
import './App.css';
import StartPage from './components/startPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <StartPage/>
        </a>
      </header>
    </div>
  );
}

export default App;
