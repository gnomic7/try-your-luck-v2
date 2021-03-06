import { split, HttpLink } from '@apollo/client';

import { getMainDefinition } from '@apollo/client/utilities';

// import { WebSocketLink } from '@apollo/client/link/ws';

// const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:4000/subscriptions',
//   options: {
//     reconnect: true,

//     // connectionParams: {
//     //   authToken: user.authToken,
//     // },
//   },
// });

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  authorization: localStorage.getItem('token') || '',
});
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  httpLink,
  httpLink,
);
export default splitLink;
