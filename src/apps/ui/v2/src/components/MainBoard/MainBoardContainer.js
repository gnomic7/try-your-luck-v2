import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ScoreBoardContext } from '../App';
import { UserContext } from '../WithLayout';
import { ErrorBoundary } from '../ErrorBoundary';

import { TEAM_MEMBER_UPDATE } from '../../queries';
import MainBoard from './MainBoard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const MainBoardContainer = () => {
  const [scoreBoard, setScoreBoard] = useContext(ScoreBoardContext);
  // const [error, setError] = useContext(ErrorContext);
  const classes = useStyles();
  const [user] = useContext(UserContext);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(1);
  const {
    userLoggedIn,
    props: { id },
  } = user;
  const [updateTeamMemberScore, { loading, error }] = useMutation(
    TEAM_MEMBER_UPDATE,
    { errorPolicy: 'ignore' },
  );
  if (!userLoggedIn) {
    return (
      <ErrorBoundary error="Please login or register to play this game." />
    );
  }

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    );
  if (error) return `Submission error! ${error.message}`;
  const computeTotal = (val) => {
    console.log(score, counter);
    if (counter === 10) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm(`Your total score is: ${score}. Do you want to save this?`)) {
        try {
          updateTeamMemberScore({
            variables: { id, score },
          });
          if (!loading && !error) {
            setScoreBoard(
              scoreBoard.map((member) =>
                member.id === id ? { ...member, score } : member,
              ),
            );
          }
        } catch (err) {
          console.log(err);
        }
      }
      setCounter(1);
      setScore(0);
      return;
    }
    setCounter(counter + 1);
    setScore(score + val);
  };
  return userLoggedIn && <MainBoard computeTotal={computeTotal} />;
};

export default MainBoardContainer;
