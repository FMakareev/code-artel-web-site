/* global PORT, process */
import ignoreStyles from 'ignore-styles';
import express from 'express';
import expressRequestLanguage from 'express-request-language';
import cookieParser from 'cookie-parser';
import reactLoadable from 'react-loadable';
import { PORT } from '../shared/constants';

import renderApp from './renderers/renderApp';
import renderEmailTemplate from './renderers/renderEmailTemplate';
import { LAYOUT_RENDER_EMAIL } from '../shared/layouts';

ignoreStyles();
const app = express();

const langArray: any[] = [];
// TODO: добавить process в глобальный конфиг typescript
// app.use(express.static(process.env.output));
app.use(express.static('dist'));
app.use(cookieParser());

reactLoadable.preloadAll().then(() =>
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port:${PORT}. !!!!!!!!`);
  }),
);

if (langArray.length) {
  app.use(
    expressRequestLanguage({
      languages: langArray,
      queryName: 'lang',
      cookie: {
        name: 'lang',
        options: {
          path: '/',
          maxAge: 3650 * 24 * 3600 * 1000, // 10 years in miliseconds
        },
        url: '/lang/{language}',
      },
    }),
  );
}

app.get(`/${LAYOUT_RENDER_EMAIL}/*`, async (request, response) => {
  console.log('LAYOUT_RENDER_EMAIL', request.originalUrl);
  const html: string = await renderEmailTemplate(request);

  if (!html) {
    response.status(404);
  } else {
    /** @description http://expressjs.com/en/4x/api.html#res.status */
    response.status(200);
  }

  /** @description http://expressjs.com/en/4x/api.html#res.send */
  response.send(html);
  /** @description http://expressjs.com/en/4x/api.html#res.end */
  response.end();
});

app.get('*', async (request, response) => {
  const html: string = await renderApp(request);

  if (!html) {
    response.status(404);
  } else {
    /** @description http://expressjs.com/en/4x/api.html#res.status */
    response.status(200);
  }

  /** @description http://expressjs.com/en/4x/api.html#res.send */
  response.send(html);
  /** @description http://expressjs.com/en/4x/api.html#res.end */
  response.end();
});

export default app;
