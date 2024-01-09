import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  
  return (
    <div className="App">
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    <script>var Alert = ReactBootstrap.Alert;</script>

    <nav class="navbar bg-dark " data-bs-theme="dark">
  <div class="container-fluid">
  
    <a class="navbar-brand" href="#">Navbar</a>
    <form class="d-flex form-inline mx-auto my-2">
    <input class="form-control me-auto" type="search" placeholder="Q    Search store" aria-label="Search"/>
    </form>
    <a class="text-white text-decoration-none" href="#">Friends</a>
    <button class="btn btn-outline-success" type="submit">♡</button>
    <button class="btn btn-outline-success" type="submit">🛒</button>
    <button class="btn btn-outline-success" type="submit">👤</button>
  </div>
</nav>

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
        </a>
      </header>
      <div>
      
    </div>
    </div>

    
    
  );
}

export default App;
