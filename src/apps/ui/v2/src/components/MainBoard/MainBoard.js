import { Paper, Button, Grid } from '@material-ui/core';

import './MainBoard.css';

const fn = () => Math.round(Math.random() * 100);
let IDX = 0;
const EachBox = ({ computeTotal }) => (
  <>
    {[1, 2, 3].map((i) => (
      <Grid item xs={4} key={IDX++}>
        <Paper className="btn-group" variant="outlined">
          <Button onClick={() => computeTotal(fn())}>Try me!</Button>
        </Paper>
      </Grid>
    ))}
  </>
);
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
const MainBoard = ({ computeTotal, classes }) => (
  <Grid container spacing={1} className="mainBoard">
    {[1, 2, 3].map((i) => (
      <Grid container item xs={12} spacing={1} key={i}>
        <EachBox computeTotal={computeTotal} />
      </Grid>
    ))}
  </Grid>
);

export default MainBoard;
