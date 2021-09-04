import { gql } from '@apollo/client';

const TEAM_MEMBERS = gql`
  query GetTeamMembers {
    getTeamMembers {
      fullName
      score
    }
  }
`;

const TEAM_MEMBER_ADD = gql`
  mutation AddTeamMember($fullName: String!) {
    addTeamMember(fullName: $fullName) {
      id
      fullName
      score
      status
    }
  }
`;

const MEMBER_ADDED_SUBSCRIPTION = gql`
  subscription OnMemberAdded($id: ID!) {
    memberAdded(id: $postID) {
      id
      fullName
      score
      status
    }
  }
`;
export { TEAM_MEMBERS, TEAM_MEMBER_ADD, MEMBER_ADDED_SUBSCRIPTION };
