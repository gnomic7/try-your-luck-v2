const { gql } = require('apollo-server');
const teamMemberTypeDefs = require('../TeamMember/teamMember.schema');
const typeDefs = gql`
  type Query {
    version: String
  }
`;

module.exports = [typeDefs, teamMemberTypeDefs];
