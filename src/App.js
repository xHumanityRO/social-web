import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Feeds from './components/feeds';
import { Navbar } from 'react-bootstrap';
import logo from './images/X_style_logo-double_size.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img src={logo}
            className="App-logo d-inline-block align-top"
            alt="logo"
          />{' '}
        </Navbar.Brand>
      </Navbar>
      <Feeds/>
    </div>
  );
}

export default App;
