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
import { ISection } from '../../Types';

const getSectionDateByTemplateName = (
  sections: ISection[],
  templateName: string,
): ISection | undefined => {
  return sections.find((item: ISection) => item.template === templateName);
};

const request = ({ data, loading, error }: any) => {
  if (loading) {
    return 'Загрузка';
  }

  if (error) {
    return 'error';
  }

  console.log(data);
  const { sections, services, portfolioworks, stacks, contacts, socialnetworks } = data;
  return (
    <Box>
      <SectionMain
        services={services.filter((item: ISection) => item.isMain)}
        {...getSectionDateByTemplateName(sections, 'main')}
      />
      <SectionServices services={services} {...getSectionDateByTemplateName(sections, 'service')} />
      <SectionPortfolio
        portfolioworks={portfolioworks}
        {...getSectionDateByTemplateName(sections, 'portfolio')}
      />
      <SectionAboutUs stacks={stacks} {...getSectionDateByTemplateName(sections, 'aboutus')} />
      <SectionContacts
        socialNetworks={socialnetworks}
        contacts={contacts}
        {...getSectionDateByTemplateName(sections, 'aboutus')}
      />
    </Box>
  );
};

export const HomePage: React.FC<any> = () => <Query query={SectionListGraphql}>{request}</Query>;

export default hot(module)(HomePage);
