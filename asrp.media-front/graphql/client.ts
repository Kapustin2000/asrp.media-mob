import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://asrp.media/public-graphql', 
  }),
  cache: new InMemoryCache(),
});

export default client;
