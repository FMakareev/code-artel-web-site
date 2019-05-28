import { hot } from 'react-hot-loader';

import * as React from 'react';

import SectionMain from '../../../../components/SectionMain/SectionMain';
import SectionServices from '../../../../components/SectionServices/SectionServices';
import SectionPortfolio from '../../../../components/SectionPortfolio/SectionPortfolio';
import SectionAboutUs from '../../../../components/SectionAboutUs/SectionAboutUs';
import SectionContacts from '../../../../components/SectionContacts/SectionContacts';
import { Box } from 'code-artel-ui-lib';

import { data } from './data';

export const HomePage: React.FC<any> = () => (
  <Box>
    <SectionMain {...data.main} />
    <SectionServices {...data.services} />
    <SectionPortfolio {...data.portfolio} />
    <SectionAboutUs {...data.aboutUs} />
    <SectionContacts {...data.contacts} />
  </Box>
);

export default hot(module)(HomePage);
