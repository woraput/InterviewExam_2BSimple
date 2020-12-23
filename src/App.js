import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './contents/Home';
import Solution from './contents/Solution';
import Courses from './contents/Courses';
import Jobs from './contents/Jobs';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/solution">
          <Solution />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


