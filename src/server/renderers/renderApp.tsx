import * as React from 'react';
import { Request } from 'express';
import { renderToStringWithData } from 'react-apollo';
import { getBundles } from 'react-loadable/webpack';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import { client } from '../../apollo/index.server';
import { template } from '../template';
import reactLoadableJson from '../../../dist/react-loadable.json';
import AppProvidersServer from '../../containers/AppProvidersServer';
import { RouterConfig } from '../../shared/config/router';

export const RenderApp = async (request: Request) => {
  try {
    /** */
    const initialReduxState: any = {};
    /** */
    const RouterContext: any = {};
    /** */
    const STStyleRenderer = new ServerStyleSheet();

    const ApolloClient = client(request);

    /** Сброс кеша */
    await ApolloClient.resetStore();

    const modules: any[] = [];

    // @ts-ignore
    const bundles = getBundles(reactLoadableJson, modules);
    const helmet = Helmet.renderStatic();

    const content = await renderToStringWithData(
      <AppProvidersServer
        request={request}
        modules={modules}
        routes={RouterConfig}
        RouterContext={RouterContext}
        ApolloClient={ApolloClient}
        STStyleRenderer={STStyleRenderer}
      />,
    );

    const styleTags = STStyleRenderer.getStyleTags();

    return template({
      styleTags,
      helmet,
      initialReduxState,
      content,
      bundles,
      client: ApolloClient,
      reactLoadableJson,
    });
  } catch (error) {
    console.error('Error RenderApp: ', error);
    return '';
  }
};

export default RenderApp;
