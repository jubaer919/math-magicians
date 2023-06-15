import React, { useState } from 'react';
import calculate from './logic/calculate';
import './calculator.css';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({});

  function handleButtonClick(buttonName) {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  }

  return (
    <div className="calculator-container">
      <h2>let us do some math!</h2>
      <div className="calculator">
        <div className="display">
          <div className="current-value">{calculatorData.next || calculatorData.total || '0'}</div>
        </div>
        <button type="button" onClick={() => handleButtonClick('AC')}>AC</button>
        <button type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleButtonClick('%')}>%</button>
        <button type="button" className="orange" onClick={() => handleButtonClick('÷')}>÷</button>
        <button type="button" onClick={() => handleButtonClick('7')}>7</button>
        <button type="button" onClick={() => handleButtonClick('8')}>8</button>
        <button type="button" onClick={() => handleButtonClick('9')}>9</button>
        <button type="button" className="orange" onClick={() => handleButtonClick('x')}>*</button>
        <button type="button" onClick={() => handleButtonClick('4')}>4</button>
        <button type="button" onClick={() => handleButtonClick('5')}>5</button>
        <button type="button" onClick={() => handleButtonClick('6')}>6</button>
        <button type="button" className="orange" onClick={() => handleButtonClick('-')}>-</button>
        <button type="button" onClick={() => handleButtonClick('1')}>1</button>
        <button type="button" onClick={() => handleButtonClick('2')}>2</button>
        <button type="button" onClick={() => handleButtonClick('3')}>3</button>
        <button type="button" className="orange" onClick={() => handleButtonClick('+')}>+</button>
        <button type="button" className="span-two" onClick={() => handleButtonClick('0')}>0</button>
        <button type="button" onClick={() => handleButtonClick('.')}>.</button>
        <button type="button" className="orange" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
