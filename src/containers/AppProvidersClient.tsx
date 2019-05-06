import { hot } from 'react-hot-loader';

import * as React from 'react';

import { ApolloProvider } from 'react-apollo';
import { GlobalStyle } from '../styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { StyledThemeProvider } from '../styles/StyledThemeProvider';

type Props = {
  [prop: string]: any;
};

export class AppProvidersClient extends React.Component<Props> {
  render() {
    const { routes, client } = this.props;

    return (
      <StyledThemeProvider>
        <ApolloProvider client={client}>
          <React.Fragment>
            <GlobalStyle />
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
          </React.Fragment>
        </ApolloProvider>
      </StyledThemeProvider>
    );
  }
}

export default hot(module)(AppProvidersClient);
