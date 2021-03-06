import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import { buildSchema } from 'type-graphql';
import { TeamMemberResolver } from './resolvers/teamMember';
import { decodeToken, verifyToken } from './utils/auth';

// import { makeExecutableSchema } from '@graphql-tools/schema';

(async function () {
  const app = express();

  const httpServer = createServer(app);

  const schema = await buildSchema({
    resolvers: [TeamMemberResolver],
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    schema,
    context({ req }) {
      const token = req?.headers?.authorization;
      if (token && verifyToken(token)) {
        return { user: decodeToken(token) };
      } else {
        throw new Error('Login required!');
      }
    },
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect() {
        // lookup userId by token, etc.
        return { user: decodeToken('') };
      },
    },
    {
      server: httpServer,
      path: server.graphqlPath,
    },
  );

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  httpServer.listen(PORT, () =>
    console.log(`Server is now running on http://localhost:${PORT}/graphql`),
  );
})();
