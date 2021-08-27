import { useQuery } from '@apollo/client';

import ScoreBoard from './ScoreBoard';
import { TEAM_MEMBERS } from '../../queries';

import './ScoreBoard.css';

const ScoreBoardContainer = () => {
  const { loading, error, data } = useQuery(TEAM_MEMBERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="scoreBoard">
      <div className="scoreBoardHeader">Current Score Board</div>
      {data.teamMembers.map((member) => (
        <ScoreBoard member={member} key={member.fullName} />
      ))}
    </div>
  );
};

export default ScoreBoardContainer;
