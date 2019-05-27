import * as React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';
import SliderPortfolioPreview from './SliderPortfolioPreview';
import SliderPortfolioControl from './SliderPortfolioControl';
import SliderPortfolioInfo, { PortfolioWork } from './SliderPortfolioInfo';

const portfolioData: PortfolioWork[] = [
  {
    tags: 'business',
    title: 'Antifake',
    description: 'is a system for supply accounting and tracking lot ',
    id: 'emcdpo.info',
    imagePreview: 'https://www.fillmurray.com/640/360',
  },
  {
    tags: 'business',
    title: 'Emernotar',
    description: 'is a service for asset protection using blockhing',
    id: 'emernotar.info',
    imagePreview: '',
  },
  {
    tags: 'business',
    title: 'The Bureau',
    description:
      "is a service for user's credit history secure uploading and prividing banks with it",
    id: 'finvariant.com',
    imagePreview: 'https://www.fillmurray.com/640/360',
  },
  {
    tags: 'business',
    title: '4-ый проект',
    description: 'is a system for supply accounting and tracking lot ',
    id: 'emcdpo.info',
    imagePreview: 'https://www.fillmurray.com/640/450',
  },
  {
    tags: 'business',
    title: '5-ый проект',
    description: 'is a service for asset protection using blockhing',
    id: 'emernotar.info',
    imagePreview: 'https://www.fillmurray.com/640/450',
  },
];

interface State {
  currentPosition: number;
}
interface Props {
  portfolioData: PortfolioWork[];
}
interface DefaultProps {
  portfolioData: PortfolioWork[];
}

export class SliderPortfolio extends React.Component<Props, State> {
  static defaultProps: DefaultProps = {
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

  nextWork = (): void => {
    if (this.state.currentPosition < portfolioData.length - 1) {
      this.setState({ currentPosition: this.state.currentPosition + 1 });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  render() {
    const { portfolioData } = this.props;
    const { currentPosition } = this.state;

    const work: PortfolioWork = portfolioData[currentPosition];
    console.log(work);
    return (
      <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
        <SliderPortfolioInfo work={work} />

        <Flex flexDirection={'column'} alignItems={'center'}>
          <SliderPortfolioPreview {...work} />
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
