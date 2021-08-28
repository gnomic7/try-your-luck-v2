import { gql } from '@apollo/client';

const TEAM_MEMBERS = gql`
  query GetTeamMembers {
    getTeamMembers {
      fullName
      score
    }
  }
`;
export default TEAM_MEMBERS;
