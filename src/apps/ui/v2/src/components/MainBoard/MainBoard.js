import React, { useState } from 'react';

import './MainBoard.css';
const fn = () => Math.round(Math.random() * 100);

const MainBoard = () => {
  const [score, setScore] = useState(0);
  return (
    <div className="mainBoard btn-group">
      <div>
        {Array(3)
          .fill()
          .map((i) => i)
          .map((i) => (
            <button onClick={() => setScore(score + fn())} key={i + 0}>
              Try Me!
            </button>
          ))}
      </div>
      <div>
        {Array(3)
          .fill()
          .map((i) => i)
          .map((i) => (
            <button onClick={() => setScore(score + fn())} key={i + 3}>
              Try Me!
            </button>
          ))}
      </div>
      <div>
        {Array(3)
          .fill()
          .map((i) => i)
          .map((i) => (
            <button onClick={() => setScore(score + fn())} key={i + 6}>
              Try Me!
            </button>
          ))}
      </div>
    </div>
  );
};

export default MainBoard;
