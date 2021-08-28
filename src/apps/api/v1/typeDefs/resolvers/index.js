// useSubscription
const resolvers = {
  Query: {
    teamMembers: () => teamMembers.sort((a, b) => b.score - a.score),
  },
  Mutation: {
    addTeamMember: (payload) => {},
  },
};
module.exports = resolvers;
