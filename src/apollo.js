import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3001/",
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        // console.log(id, cache);
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: !isLiked } });
      }
    }
  }
});

export default client;
