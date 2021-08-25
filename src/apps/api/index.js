const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type TeamMember {
    fullName: String
    score: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    teamMembers: [TeamMember]
  }
`;

const teamMembers = [
  { fullName: 'Rohit Dhakal', score: 700 },
  { fullName: 'Shreyanshi', score: 900 },
  { fullName: 'Utshav', score: 600 },
  { fullName: 'Suman', score: 800 },
];

const resolvers = {
  Query: {
    teamMembers: () => teamMembers.sort((a, b) => b.score - a.score),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
