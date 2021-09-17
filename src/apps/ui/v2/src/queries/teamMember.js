import { gql } from '@apollo/client';

const TEAM_MEMBERS = gql`
  query GetTeamMembers {
    getTeamMembers {
      firstName
      lastName
      displayName
      id
      status
      score
    }
  }
`;

const TEAM_MEMBERS_LOGIN = gql`
  mutation Login($userName: String!, $password: String!) {
    teamMemberLogin(userName: $userName, password: $password) {
      id
      userName
      firstName
      lastName
      displayName
      score
      accessToken
    }
  }
`;
const TEAM_MEMBER_ADD = gql`
  mutation AddTeamMember(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $password: String!
  ) {
    addTeamMember(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      password: $password
    ) {
      id
      firstName
      lastName
      displayName
      score
      status
    }
  }
`;

const TEAM_MEMBER_UPDATE = gql`
  mutation updateTeamMemberScore($id: String!, $score: Float!) {
    updateTeamMemberScore(id: $id, score: $score) {
      userName
      id
      firstName
      lastName
      displayName
      score
      status
    }
  }
`;
const MEMBER_ADDED_SUBSCRIPTION = gql`
  subscription OnMemberAdded($id: ID!) {
    memberAdded(id: $postID) {
      id
      firstName
      lastName
      score
      status
    }
  }
`;
export {
  TEAM_MEMBERS,
  TEAM_MEMBER_ADD,
  TEAM_MEMBERS_LOGIN,
  TEAM_MEMBER_UPDATE,
  MEMBER_ADDED_SUBSCRIPTION,
};
