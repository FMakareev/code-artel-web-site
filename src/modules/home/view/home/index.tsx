import { hot } from 'react-hot-loader';

import * as React from 'react';
import { Query } from 'react-apollo';
import SectionMain from '../../components/SectionMain/SectionMain';
import SectionServices from '../../components/SectionServices/SectionServices';
import SectionPortfolio from '../../components/SectionPortfolio/SectionPortfolio';
import SectionAboutUs from '../../components/SectionAboutUs/SectionAboutUs';
import SectionContacts from '../../components/SectionContacts/SectionContacts';
import { Box } from 'code-artel-ui-lib';
// @ts-ignore
import SectionListGraphql from '../../graphqls/SectionList.graphql';

const searchSection = (sections: [], template) => {
  const section = sections.filter(section => section.template === template);
  return section;
};

const request = ({ data, loading, error }: any) => {
  if (loading) {
    return 'Загрузка';
  }

  if (error) {
    return 'error';
  }

  console.log(data);
  // console.log(...searchSection(data.sections, 'main'));
  // console.log(...data.services);

  return (
    <Box>
      <SectionMain {...searchSection(data.sections, 'main')} {...data} />
      <SectionServices {...data} />
      <SectionPortfolio {...data} />
      <SectionAboutUs {...data} />
      <SectionContacts {...data} />
    </Box>
  );
};

export const HomePage: React.FC<any> = () => <Query query={SectionListGraphql}>{request}</Query>;

export default hot(module)(HomePage);
