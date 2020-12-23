import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar>

        </Navbar>
      </div>
    </Router>
  );
}

export default App;


