import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://moviesql.now.sh/"
});

export default client;
