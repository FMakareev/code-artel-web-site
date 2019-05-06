import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import reactLoadable from 'react-loadable';
import { StaticRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import { StyledThemeProvider } from '../styles/StyledThemeProvider';
import { GlobalStyle } from '../styles/GlobalStyle';
import { renderRoutes } from 'react-router-config';

export const AppProvidersServer: React.FC<any> = ({
  ApolloClient,
  STStyleRenderer,
  request,
  RouterContext,
  modules,
  routes,
  location,
}) => (
  <ApolloProvider client={ApolloClient}>
    <StyleSheetManager sheet={STStyleRenderer.instance}>
      <StyledThemeProvider>
        <React.Fragment>
          <GlobalStyle />
          <StaticRouter
            location={{
              pathname: request.originalUrl,
              ...location,
            }}
            context={RouterContext}>
            <reactLoadable.Capture report={moduleName => modules.push(moduleName)}>
              {renderRoutes(routes)}
            </reactLoadable.Capture>
          </StaticRouter>
        </React.Fragment>
      </StyledThemeProvider>
    </StyleSheetManager>
  </ApolloProvider>
);

export default AppProvidersServer;
