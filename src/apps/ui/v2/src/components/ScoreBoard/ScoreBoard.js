import './ScoreBoard.css';
const ScoreBoard = ({ member }) => {
  const { firstName, lastName, score: apiScore } = member;
  return (
    member && (
      <div key={`${firstName}-${lastName}`} className="memberItem">
        <div>
          {firstName} {lastName}:
        </div>
        <div>{apiScore}</div>
      </div>
    )
  );
};

export default ScoreBoard;
