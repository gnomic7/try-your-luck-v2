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

const TEAM_MEMBER_UPDATE = gql`
  mutation UpdateTeamMember($fullName: String!, $score: Float!) {
    updateTeamMember(fullName: $fullName, score: $score) {
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
export {
  TEAM_MEMBERS,
  TEAM_MEMBER_ADD,
  TEAM_MEMBER_UPDATE,
  MEMBER_ADDED_SUBSCRIPTION,
};
