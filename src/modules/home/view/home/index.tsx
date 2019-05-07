import { hot } from 'react-hot-loader';

import * as React from 'react';
// import {Link} from 'react-router-dom';

import SectionMain from '../../../../components/SectionMain/SectionMain';
import Header from '../../../../components/Header/Header';
import { Box } from 'code-artel-ui-lib';

export const HomePage: React.FC<any> = () => (
  <Box>
    <Header />
    <SectionMain />

    {/*<Link to={'/contact'}>contacts</Link>*/}
  </Box>
);

export default hot(module)(HomePage);
