// import { useQuery, useSubscription } from '@apollo/client';
import { useContext } from 'react';
// import { useQuery } from '@apollo/client';
import { ApplicationContext } from '../WithLayout';
import ScoreBoard from './ScoreBoard';

// import { TEAM_MEMBERS, MEMBER_ADDED_SUBSCRIPTION } from '../../queries';
// import { TEAM_MEMBERS } from '../../queries';
// import { TEAM_MEMBERS } from '../../queries';
import './ScoreBoard.css';

const ScoreBoardContainer = (props) => {
  const [appData] = useContext(ApplicationContext);

  return (
    <div className="scoreBoard">
      <div className="scoreBoardHeader">Current Score Board</div>
      {appData.scoreBoard.map((member) => (
        <ScoreBoard member={member} key={member.fullName} />
      ))}
    </div>
  );
};

export default ScoreBoardContainer;
