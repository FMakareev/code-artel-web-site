import { hot } from 'react-hot-loader';

import * as React from 'react';
import { Query } from 'react-apollo';
import SectionMain from '../../../../components/SectionMain/SectionMain';
import SectionServices from '../../../../components/SectionServices/SectionServices';
import SectionPortfolio from '../../../../components/SectionPortfolio/SectionPortfolio';
import SectionAboutUs from '../../../../components/SectionAboutUs/SectionAboutUs';
import SectionContacts from '../../../../components/SectionContacts/SectionContacts';
import { Box } from 'code-artel-ui-lib';
// @ts-ignore
import SectionListGraphql from '../../graphqls/SectionList.graphql';
import { data as DATA } from './data';

const request = ({ data, loading, error }: any) => {
  if (loading) {
    return 'Загрузка';
  }

  if (error) {
    return 'error';
  }

  console.log(data);
  return (
    <Box>
      <SectionMain {...DATA.main} />
      <SectionServices {...DATA.services} />
      <SectionPortfolio {...DATA.portfolio} />
      <SectionAboutUs {...DATA.aboutUs} />
      <SectionContacts {...DATA.contacts} />
    </Box>
  );
};

export const HomePage: React.FC<any> = () => <Query query={SectionListGraphql}>{request}</Query>;

export default hot(module)(HomePage);
