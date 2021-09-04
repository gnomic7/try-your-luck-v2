import './MainBoard.css';
const fn = () => Math.round(Math.random() * 100);
let IDX = 0;
// const RANDOM_EMOJIS = {
//   1: '🙈',
//   2: '🐶',
//   3: '🐕',
//   4: '🐩',
//   5: '🦒',
//   6: '🐫',
//   7: '🐎',
//   8: '🦁',
//   9: '🦍',
//   10: '🐳',
// };
const MainBoard = ({ computeTotal }) => (
  <div className="mainBoard">
    <div className="btn-group">
      <div key="row1">
        {Array(3)
          .fill()
          .map((i) => i)
          .map((i) => (
            <button onClick={() => computeTotal(fn())} key={IDX++}>
              Try Me!
            </button>
          ))}
      </div>
      <div key="row2">
        {Array(3)
          .fill()
          .map((i) => i)
          .map((i) => (
            <button onClick={() => computeTotal(fn())} key={IDX++}>
              Try Me!
            </button>
          ))}
      </div>
      <div key="row3">
        {Array(3)
          .fill()
          .map((i) => i)
          .map((i) => (
            <button onClick={() => computeTotal(fn())} key={IDX++}>
              Try Me!
            </button>
          ))}
      </div>
    </div>
  </div>
);

export default MainBoard;
