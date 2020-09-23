import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logoXHumanity-black.jpeg';
import './App.css';
import StartPage from './components/startPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <StartPage/>

      </header>
    </div>
  );
}

export default App;
