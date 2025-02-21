import { useState, useRef } from "react";
import '../styles/Calculator.scss';
export default function Calculator(){
    const [display, setDisplay] = useState('');

    const clearTotal = () => {
      setDisplay('');
    };
  
    const changePositivity = () => {
      // Example implementation: Toggle the sign of the current value
      if (display) {
        setDisplay((parseFloat(display) * -1).toString());
      }
    };
  
    const getPercentage = () => {
      // Example implementation: Convert current value to a percentage
      if (display) {
        setDisplay((parseFloat(display) / 100).toString());
      }
    };
  
    const divide = () => {
      // You might want to save the current value and operator to handle calculations
      setDisplay(display + ' ÷ ');
    };
  
    const multiply = () => {
      setDisplay(display + ' × ');
    };
  
    const subtract = () => {
      setDisplay(display + ' − ');
    };
  
    const add = () => {
      setDisplay(display + ' + ');
    };
  
    const print = (value) => {
      setDisplay(display + value);
    };
  
    const equal = () => {
      // A very basic evaluation (note: using eval is not recommended in production)
      try {
        // Replace the operator symbols with JavaScript operators
        const sanitized = display
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-');
        // eslint-disable-next-line no-eval
        const result = eval(sanitized);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    }
    return(
        <div className="calculator">
      <input 
        className="readout" 
        type="text" 
        value={display} 
        readOnly 
      />
      <div className="keys">
        <div className="row">
          <button className="key misc" onClick={clearTotal}>C</button>
          <button className="key misc" onClick={changePositivity}>
            <sup>+</sup>/<sub>−</sub>
          </button>
          <button className="key misc" onClick={getPercentage}>%</button>
          <button className="key function" onClick={divide}>÷</button>
        </div>
        <div className="row">
          <button className="key numeric" onClick={() => print(7)}>7</button>
          <button className="key numeric" onClick={() => print(8)}>8</button>
          <button className="key numeric" onClick={() => print(9)}>9</button>
          <button className="key function" onClick={multiply}>×</button>
        </div>
        <div className="row">
          <button className="key numeric" onClick={() => print(4)}>4</button>
          <button className="key numeric" onClick={() => print(5)}>5</button>
          <button className="key numeric" onClick={() => print(6)}>6</button>
          <button className="key function" onClick={subtract}>−</button>
        </div>
        <div className="row">
          <button className="key numeric" onClick={() => print(1)}>1</button>
          <button className="key numeric" onClick={() => print(2)}>2</button>
          <button className="key numeric" onClick={() => print(3)}>3</button>
          <button className="key function" onClick={add}>+</button>
        </div>
        <div className="row">
          <button className="key numeric double" onClick={() => print(0)}>0</button>
          <button className="key numeric" onClick={() => print('.')}>.</button>
          <button className="key function last" onClick={equal}>=</button>
        </div>
      </div>
    </div>
    );
};