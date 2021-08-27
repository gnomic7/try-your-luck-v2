import './ScoreBoard.css';
const ScoreBoard = ({ member }) => {
  const { fullName, score: apiScore } = member;
  return (
    <div key={fullName} className="memberItem">
      {fullName} - {apiScore}
    </div>
  );
};

export default ScoreBoard;
