import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleCLick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult('');
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult('Error');
    }
  }

  return (
    <div className="App">
      <h1 className="main-heading">Simple React Calculator</h1>
      <div className="container">
        <form>
          <input type="text" value={result} readOnly/>
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">Clear</button>
          <button className="highlight" onClick={backspace} id="backspace">C</button>
          <button className="highlight" name="/" onClick={handleCLick}>&divide;</button>
          <button name="7" onClick={handleCLick}>7</button>
          <button name="8" onClick={handleCLick}>8</button>
          <button name="9" onClick={handleCLick}>9</button>
          <button className="highlight" name="*" onClick={handleCLick}>&times;</button>
          <button name="4" onClick={handleCLick}>4</button>
          <button name="5" onClick={handleCLick}>5</button>
          <button name="6" onClick={handleCLick}>6</button>
          <button className="highlight" name="-" onClick={handleCLick}>&ndash;</button>
          <button name="1" onClick={handleCLick}>1</button>
          <button name="2" onClick={handleCLick}>2</button>
          <button name="3" onClick={handleCLick}>3</button>
          <button className="highlight" name="+" onClick={handleCLick}>+</button>
          <button name="0" onClick={handleCLick}>0</button>
          <button name="." onClick={handleCLick}>.</button>
          <button className="highlight" onClick={calculate} id="result">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
