import React from "react";
import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";

const Header: React.FC = () => {
  return (
    <Router>
      <header className="fixed md:pt-10 pb-5 w-4/5 lg:w-3/5 bg-black z-10 font-bold">
        <div className="flex flex-col md:flex-row justify-between items-left">
          <div>
            <Link to="/" className="underline">
              Bc. David Strašák
            </Link>
          </div>
          <nav className="md:items-left">
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-10 md:space-y-0 items-left">
              <li>
                <Link to="/projects" className="underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/CV" className="underline">
                  CV
                </Link>
              </li>
              <li>
                <Link to="/about" className="underline">
                  About me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="relative top-44 lg:top-36">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/projects/" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
