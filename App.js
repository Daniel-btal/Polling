import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Vote from './Vote';
import Result from './Result';
import Login from './Login';
import Register from './register';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Vote" element={<Vote />} />
            <Route path="/results" element={<Result />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

