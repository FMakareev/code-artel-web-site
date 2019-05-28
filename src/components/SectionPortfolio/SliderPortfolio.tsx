import * as React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';
import SliderPortfolioPreview from './SliderPortfolioPreview';
import SliderPortfolioControl from './SliderPortfolioControl';
import SliderPortfolioInfo from './SliderPortfolioInfo';
import { PortfolioSlider, PortfolioData } from '../../modules/home/Types';

interface StateSliderPortfolioState {
  currentPosition: number;
}

export class SliderPortfolio extends React.Component<PortfolioSlider, StateSliderPortfolioState> {
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
    if (this.state.currentPosition < this.props.portfolioData.length - 1) {
      this.setState({ currentPosition: this.state.currentPosition + 1 });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  render() {
    const { portfolioData } = this.props;
    const { currentPosition } = this.state;

    const work: PortfolioData = portfolioData[currentPosition];

    return (
      <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
        <SliderPortfolioInfo {...work} />

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
