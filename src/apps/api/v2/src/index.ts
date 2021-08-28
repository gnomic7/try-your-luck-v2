import 'reflect-metadata';
import { ApolloServer, gql } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { TeamMemberResolver } from './resolvers/teamMember';

(async () => {
  const schema = await buildSchema({
    resolvers: [TeamMemberResolver],
    emitSchemaFile: true,
  });
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    schema,
    context: () => {
      const dbConn = 'testDB';

      return { dbConn };
    },
    introspection: true,
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
