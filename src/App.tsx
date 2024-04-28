import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"

function App() {
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
            <Route path="/blog/" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
