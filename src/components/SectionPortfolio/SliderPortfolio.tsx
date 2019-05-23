import * as React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';
import SliderPortfolioPreview from './SliderPortfolioPreview';
import SliderPortfolioControl from './SliderPortfolioControl';
import SliderPortfolioInfo from './SliderPortfolioInfo';

const portfolioData = [
  {
    tags: 'business',
    title: 'Antifake',
    description: 'is a system for supply accounting and tracking lot ',
    id: 'emcdpo.info',
    imagePreview: '../../assets/images/placeholder.png',
  },
  {
    tags: 'business',
    title: 'Emernotar',
    description: 'is a service for asset protection using blockhing',
    id: 'emernotar.info',
    imagePreview: '../../assets/images/placeholder2.png',
  },
  {
    tags: 'business',
    title: 'The Bureau',
    description:
      "is a service for user's credit history secure uploading and prividing banks with it",
    id: 'finvariant.com',
    imagePreview: '../../assets/images/placeholder.png',
  },
  {
    tags: 'business',
    title: '4-ый проект',
    description: 'is a system for supply accounting and tracking lot ',
    id: 'emcdpo.info',
    imagePreview: '../../assets/images/placeholder2.png',
  },
  {
    tags: 'business',
    title: '5-ый проект',
    description: 'is a service for asset protection using blockhing',
    id: 'emernotar.info',
    imagePreview: '../../assets/images/placeholder.png',
  },
];

interface Props {
  portfolioData: string;
}

export class SliderPortfolio extends React.Component<Props, any> {
  static defaultProps: any = {
    portfolioData,
  };

  state = {
    currentPosition: 0,
  };

  toggleItem = (index: number): void => {
    const { portfolioData } = this.props;

    if (index <= portfolioData.length - 1) {
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
      <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
        <SliderPortfolioInfo work={work} />

        <Flex flexDirection={'column'} alignItems={'center'}>
          <SliderPortfolioPreview work={work} />
          <SliderPortfolioControl
            portfolioData={portfolioData}
            currentPosition={currentPosition}
            nextWork={this.nextWork}
            toggleItem={this.toggleItem}
            startCounter={5}
          />
        </Flex>
      </Flex>
    );
  }
}

export default SliderPortfolio;
