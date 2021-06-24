import React, { useState, useEffect } from "react";
import Button from '../../components/button';
import './index.css';

function Practice() {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  }

  const handleIncrease = () => {
    setCount(count + 1);
  }

  return <div className="App">
    <div className="container">
      <div className="practice-1">
        <div className="box">{count}</div>
        <div className="btn-group">
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleIncrease}>Increase</Button>
        </div>
      </div>
    </div>
  </div>;
}

export default Practice;
