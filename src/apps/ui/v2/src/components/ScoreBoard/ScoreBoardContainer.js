import { useQuery } from '@apollo/client';
// import { useQuery, useSubscription } from '@apollo/client';

import ScoreBoard from './ScoreBoard';
// import { TEAM_MEMBERS, MEMBER_ADDED_SUBSCRIPTION } from '../../queries';
import { TEAM_MEMBERS } from '../../queries';

import './ScoreBoard.css';

const ScoreBoardContainer = () => {
  const { loading, error, data } = useQuery(TEAM_MEMBERS);
  // const { data: subData } = useSubscription(MEMBER_ADDED_SUBSCRIPTION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="scoreBoard">
      <div className="scoreBoardHeader">Current Score Board</div>
      {data.getTeamMembers.map((member) => (
        <ScoreBoard member={member} key={member.fullName} />
      ))}
    </div>
  );
};

export default ScoreBoardContainer;
