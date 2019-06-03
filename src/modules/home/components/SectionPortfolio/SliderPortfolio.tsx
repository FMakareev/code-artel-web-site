import * as React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';
import SliderPortfolioPreview from './SliderPortfolioPreview';
import SliderPortfolioControl from './SliderPortfolioControl';
import SliderPortfolioInfo from './SliderPortfolioInfo';
import { PortfolioSlider, PortfolioWork } from '../../Types';

interface StateSliderPortfolioState {
  currentPosition: number;
}

export class SliderPortfolio extends React.Component<PortfolioSlider, StateSliderPortfolioState> {
  state = {
    currentPosition: 0,
  };

  toggleItem = (index: number): void => {
    const { portfolioWorks } = this.props;

    if (index <= portfolioWorks.length - 1) {
      this.setState({ currentPosition: index });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  nextWork = () => {
    if (this.state.currentPosition < this.props.portfolioWorks.length - 1) {
      this.setState({ currentPosition: this.state.currentPosition + 1 });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  render() {
    const { portfolioWorks } = this.props;
    const { currentPosition } = this.state;

    const work: PortfolioWork = portfolioWorks[currentPosition];

    return (
      <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
        <SliderPortfolioInfo {...work} />

        <Flex flexDirection={'column'} alignItems={'center'}>
          <SliderPortfolioPreview {...work} />
          <SliderPortfolioControl
            portfolioWorks={portfolioWorks}
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
