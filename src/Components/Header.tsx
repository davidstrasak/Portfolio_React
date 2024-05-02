import React from "react";
import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";

const Header: React.FC = () => {
  return (
    <Router>
      <header className="flex justify-end items-center mt-8 mb-16">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/projects/" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default Header;
