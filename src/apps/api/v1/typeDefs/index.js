const { gql } = require('apollo-server');
const teamMemberTypeDefs = require('./teamMember');
const typeDefs = gql`
  type Query {
    version: String
  }
`;

module.exports = [typeDefs, teamMemberTypeDefs];
