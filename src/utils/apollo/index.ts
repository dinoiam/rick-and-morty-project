import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(`graphQL error: ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' })]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default client;
