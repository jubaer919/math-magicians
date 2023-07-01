import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import HomePage from './components/HomePage';
import FunnyQuot from './components/FunnyQuot';
import './components/calculator.css';

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <h2 className="heading-primary">Math Magicians</h2>
          <ul className="list">
            <li className="list-item">
              <Link to="/" className="list-link">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/calculator" className="list-link">Calculator</Link>
            </li>
            <li className="list-item">
              <Link to="/quot" className="list-link">Funny Quot</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quot" element={<FunnyQuot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
