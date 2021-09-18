import { useContext, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';

import { ScoreBoardContext } from '../App';
import ScoreBoard from './ScoreBoard';
import { TEAM_MEMBERS } from '../../queries';
import './ScoreBoard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const ScoreBoardContainer = () => {
  const [scoreBoard, setScoreBoard] = useContext(ScoreBoardContext);
  const classes = useStyles();
  const { loading, error, data } = useQuery(TEAM_MEMBERS, {
    onError(err) {
      return <div>err.message;</div>;
    },
  });
  useEffect(() => {
    if (!loading || (!error && data?.getTeamMembers)) {
      setScoreBoard(data.getTeamMembers);
    }
  }, [error, loading, setScoreBoard, scoreBoard, data]);

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    );
  if (error) return <p>Error :(</p>;
  return (
    <div className="scoreBoard">
      <div className="scoreBoardHeader">Current Score Board</div>
      {!scoreBoard.length && <div className="memberItem">No members yet</div>}
      {[...scoreBoard]
        .sort((a, b) => b.score - a.score)
        .map((member) => (
          <ScoreBoard member={member} key={`${member.displayName}`} />
        ))}
    </div>
  );
};

export default ScoreBoardContainer;
