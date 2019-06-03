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

const searchSection = (sections: object[], sectionTemplate: string) => {
  const section = sections.filter((section: object) => section.template === sectionTemplate);
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
  return (
    <Box>
      <SectionMain section={searchSection(data.sections, 'main')} serviceList={data.services} />
      <SectionServices
        section={searchSection(data.sections, 'service')}
        serviceList={data.services}
      />
      <SectionPortfolio
        section={searchSection(data.sections, 'portfolio')}
        portfolioWorks={data.portfolioworks}
      />
      <SectionAboutUs section={searchSection(data.sections, 'aboutus')} stack={data.stacks} />
      <SectionContacts
        section={searchSection(data.sections, 'contacts')}
        contactInfo={data.contacts}
      />
    </Box>
  );
};

export const HomePage: React.FC<any> = () => <Query query={SectionListGraphql}>{request}</Query>;

export default hot(module)(HomePage);
