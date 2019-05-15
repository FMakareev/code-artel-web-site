import { hot } from 'react-hot-loader';

import * as React from 'react';
// import {Link} from 'react-router-dom';

import SectionMain from '../../../../components/SectionMain/SectionMain';
import SectionServices from '../../../../components/SectionServices/SectionServices';
import SectionPortfolio from '../../../../components/SectionPortfolio/SectionPortfolio';
import SectionAboutUs from '../../../../components/SectionAboutUs/SectionAboutUs';
import SectionContacts from '../../../../components/SectionContacts/SectionContacts';
import { Box } from 'code-artel-ui-lib';

export const HomePage: React.FC<any> = () => (
  <Box>
    <SectionMain />
    <SectionServices />
    <SectionPortfolio />
    <SectionAboutUs />
    <SectionContacts />
    {/*<Link to={'/contact'}>contacts</Link>*/}
  </Box>
);

export default hot(module)(HomePage);
