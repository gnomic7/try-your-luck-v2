import { gql } from '@apollo/client';

const TEAM_MEMBERS = gql`
  query GetTeamMembers {
    teamMembers {
      fullName
      score
    }
  }
`;
export default TEAM_MEMBERS;
