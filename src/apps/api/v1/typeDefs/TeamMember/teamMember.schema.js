const { gql } = require('apollo-server');

module.exports = gql`
  # All queries for TeamMember
  type TeamMember {
    fullName: String
    score: Int
  }

  extend type Query {
    teamMembers: [TeamMember]
  }

  # Subscriptions to keep track of the ongoing changes
  # Mutation to update the teamMember db
  extend type Mutation {
    addTeamMember(input: TeamMember): [TeamMember]
  }
`;
