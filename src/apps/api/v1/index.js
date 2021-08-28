const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./typeDefs');
const queryResolver = require('./typeDefs/resolvers');

const teamMembers = [
  { fullName: 'Rohit Dhakal', score: 700 },
  { fullName: 'Shreyanshi', score: 900 },
  { fullName: 'Utshav', score: 600 },
  { fullName: 'Suman', score: 800 },
];

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers: queryResolver });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
