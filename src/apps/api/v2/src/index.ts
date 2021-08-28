import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server';
import { buildSchema } from 'type-graphql'
import {TeamMemberResolver} from './resolvers/teamMember';

const teamMembers = [
  { fullName: 'Rohit Dhakal', score: 700 },
  { fullName: 'Shreyanshi', score: 900 },
  { fullName: 'Utshav', score: 600 },
  { fullName: 'Suman', score: 800 },
];

(async () => {
  const schema = await buildSchema({
  resolvers: [TeamMemberResolver],
  emitSchemaFile: true,
})
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
})();
