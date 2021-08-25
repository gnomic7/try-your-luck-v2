import React, { useState } from 'react';
import './ScoreBoard.css';
const ScoreBoard = ({ member }) => {
  const { fullName, score: apiScore } = member;
  const [score] = useState();
  return (
    <div key={fullName} className="memberItem">
      <div>{fullName}</div> -{' '}
      <div>
        {score} - {apiScore}
      </div>
    </div>
  );
};

export default ScoreBoard;
