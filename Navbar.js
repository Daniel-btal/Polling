import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success shadow">
    <div className="container-fluid">
          <Link to="/" className="nav-link active text-light me-3 ">Home</Link>
          <Link to="/register" className="nav-link active text-light me-3 ">Register</Link>
          <Link to="/Login" className="nav-link active text-light me-3 ">Login</Link>
          <Link to="/Vote" className="nav-link active text-light me-3 ">Vote</Link>
          <Link to="/Result" className="nav-link active text-light me-3 ">Result</Link>
          </div>
      </nav>
  );
}


export default Navbar;
