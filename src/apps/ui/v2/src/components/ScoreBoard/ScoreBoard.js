import './ScoreBoard.css';
const ScoreBoard = ({ member }) => {
  const { displayName, score: apiScore } = member;
  return (
    member && (
      <div key={displayName} className="memberItem">
        <div>{displayName}:</div>
        <div>{apiScore}</div>
      </div>
    )
  );
};

export default ScoreBoard;
