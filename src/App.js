import React, { useState } from 'react';
import Calculator from './components/Calculator';
import HomePage from './components/HomePage';
import FunnyQuot from './components/FunnyQuot';
import './components/calculator.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'calculator':
        return <Calculator />;
      case 'quot':
        return <FunnyQuot />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <div className="header">
        <h2 className="heading-primary">Math Magicians</h2>
        <ul className="list">
          <li className="list-item">
            <button className="list-link" type="button" onClick={() => setCurrentPage('home')}>Home</button>
          </li>
          <li className="list-item">
            <button className="list-link" type="button" onClick={() => setCurrentPage('calculator')}>Calculator</button>
          </li>
          <li className="list-item">
            <button className="list-link" type="button" onClick={() => setCurrentPage('quot')}>Funny Quot</button>
          </li>
        </ul>
      </div>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
