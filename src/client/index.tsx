import * as React from 'react';
import { render } from 'react-dom';
import reactLoadable from 'react-loadable';
import { client } from '../apollo/index.client';
import AppProvidersClient from '../containers/AppProvidersClient';

import { RouterConfig } from '../shared/config/router';
import { isBrowser } from '../shared/constants';

const appContainer = isBrowser ? document.getElementById('app') : null;

reactLoadable.preloadReady().then(() => {
  render(<AppProvidersClient routes={RouterConfig} client={client} />, appContainer);
});

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('../containers/AppProvidersClient.tsx', () => {
    const NextAppProvidersClient = require('../containers/AppProvidersClient.tsx').default;
    reactLoadable.preloadReady().then(() => {
      render(<NextAppProvidersClient routes={RouterConfig} client={client} />, appContainer);
    });
  });
}
