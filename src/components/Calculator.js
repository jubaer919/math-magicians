import './calculator.css';
import Display from './Display';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display />
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">+</button>
        <button type="button" className="span-two">
          0
        </button>
        <button type="button">.</button>
        <button type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;