import * as React from 'react';

/** Components */
import { Flex, Text, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import SliderPortfolioPreview from './SliderPortfolioPreview';
import SliderPortfolioControl from './SliderPortfolioControl';
import SliderPortfolioInfo from './SliderPortfolioInfo';

const portfolioData = [
  {
    tags: 'business',
    title: 'Antifake',
    description: 'is a system for supply accounting and tracking lot ',
    id: 'emcdpo.info',
    imagePreview: 'url(../../assets/images/placeholder.png)',
  },
  {
    tags: 'business',
    title: 'Emernotar',
    description: 'is a service for asset protection using blockhing',
    id: 'emernotar.info',
    imagePreview: 'url(../../assets/images/placeholder2.png)',
  },
  {
    tags: 'business',
    title: 'The Bureau',
    description:
      "is a service for user's credit history secure uploading and prividing banks with it",
    id: 'finvariant.com',
    imagePreview: 'url(../../assets/images/placeholder.png)',
  },
  {
    tags: 'business',
    title: '4-ый проект',
    description: 'is a system for supply accounting and tracking lot ',
    id: 'emcdpo.info',
    imagePreview: 'url(../../assets/images/placeholder2.png)',
  },
  {
    tags: 'business',
    title: '5-ый проект',
    description: 'is a service for asset protection using blockhing',
    id: 'emernotar.info',
    imagePreview: 'url(../../assets/images/placeholder.png)',
  },
];

export class SectionPortfolio extends React.Component<any, any> {
  static defaultProps: any = {
    portfolioData,
  };

  state = {
    currentPosition: 0,
  };

  toggleItem = (index: number): void => {
    const { portfolioData } = this.props;

    if (index < portfolioData.length - 1) {
      this.setState({ currentPosition: index });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  nextWork = () => {
    if (this.state.currentPosition < portfolioData.length - 1) {
      this.setState({ currentPosition: this.state.currentPosition + 1 });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  render() {
    const { portfolioData } = this.props;
    const { currentPosition } = this.state;

    const work = portfolioData[currentPosition];

    return (
      <Wrapper id={'portfolio'} color={true}>
        <Container>
          <Flex flexDirection={'column'} width={'100%'}>
            <Box marginBottom={4}>
              <SectionHeader
                variant={'variant3'}
                title={'НАШИ РАБОТЫ'}
                description={'Мы помогаем нашим клиентам'}>
                <Text variant={'h3_bold'} color={'black'}>
                  выиграть
                </Text>
              </SectionHeader>
            </Box>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <SliderPortfolioInfo work={work} />
              <Flex flexDirection={'column'} alignItems={'center'}>
                <SliderPortfolioPreview work={work} />
                <SliderPortfolioControl
                  portfolioData={portfolioData}
                  currentPosition={currentPosition}
                  nextWork={this.nextWork}
                  toggleItem={this.toggleItem}
                  startCounter={60}
                />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Wrapper>
    );
  }
}

export default SectionPortfolio;
