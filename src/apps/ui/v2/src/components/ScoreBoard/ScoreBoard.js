import './ScoreBoard.css';
const ScoreBoard = ({ member }) => {
  const { fullName, score: apiScore } = member;
  return (
    <div key={fullName} className="memberItem">
      <div>{fullName}:</div>
      <div>{apiScore}</div>
    </div>
  );
};

export default ScoreBoard;
