import React, { useState } from 'react';
import './App.css';
import Button from './Button';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); 
      } catch (error) {
        setResult('Error');
      }
    } 
    else if (value === 'C') {
      setInput('');
      setResult('');
    } 
    else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn, index) => (
          <Button key={index} label={btn} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;