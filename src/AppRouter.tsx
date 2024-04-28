import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/blog/" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
