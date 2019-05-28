/* global ENDPOINT_CLIENT */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ENDPOINT_CLIENT, window } from '../shared/constants';

export const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.APOLLO_STATE),
  link: createHttpLink({
    uri: `http://localhost:1337/graphql`,
    credentials: 'same-origin',
  }),
  ssrForceFetchDelay: 100,
});

export default client;
