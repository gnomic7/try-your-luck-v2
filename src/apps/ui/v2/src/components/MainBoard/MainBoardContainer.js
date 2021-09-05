import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { TEAM_MEMBER_UPDATE } from '../../queries';

import MainBoard from './MainBoard';

const MainBoardContainer = () => {
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(1);
  const [updateTeamMember, { loading, error }] =
    useMutation(TEAM_MEMBER_UPDATE);
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const computeTotal = (val) => {
    if (counter === 10) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm(`Your total score is: ${score}. Do you want to save this?`)) {
        const fullName = prompt('What name would you like to use?');
        console.log({ fullName, score });
        updateTeamMember({
          variables: { fullName, score },
        });
      }
      setCounter(1);
      return;
    }
    setCounter(counter + 1);
    setScore(score + val);
  };
  return <MainBoard computeTotal={computeTotal} />;
};

export default MainBoardContainer;
