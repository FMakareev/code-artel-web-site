/* global ENDPOINT_CLIENT */
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';

import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ErrorResponse, onError } from 'apollo-link-error';

import { ENDPOINT_CLIENT, window } from '../shared/constants';

const HttpLink = createHttpLink({
  uri: `${ENDPOINT_CLIENT}/graphql`,
  credentials: 'same-origin',
});

const ErrorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([ErrorLink, HttpLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.APOLLO_STATE),
  link,
  ssrForceFetchDelay: 100,
});

export default client;
