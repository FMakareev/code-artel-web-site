import * as React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';
import SliderPortfolioPreview from './SliderPortfolioPreview';
import SliderPortfolioControl from './SliderPortfolioControl';
import SliderPortfolioInfo from './SliderPortfolioInfo';
import { IPortfolioSliderProps, IPortfolioWork } from './types';

interface ISliderPortfolioState {
  currentPosition: number;
}

export class SliderPortfolio extends React.Component<IPortfolioSliderProps, ISliderPortfolioState> {
  state = {
    currentPosition: 0,
  };

  toggleItem = (index: number): void => {
    const { portfolioworks } = this.props;

    if (index <= portfolioworks.length - 1) {
      this.setState({ currentPosition: index });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  nextWork = () => {
    const { portfolioworks } = this.props;
    if (this.state.currentPosition < portfolioworks.length - 1) {
      this.setState({ currentPosition: this.state.currentPosition + 1 });
    } else {
      this.setState({ currentPosition: 0 });
    }
  };

  render() {
    const { portfolioworks } = this.props;
    const { currentPosition } = this.state;

    const work: IPortfolioWork = portfolioworks[currentPosition];

    return (
      <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
        <SliderPortfolioInfo {...work} />

        <Flex flexDirection={'column'} alignItems={'center'}>
          <SliderPortfolioPreview {...work} />
          {portfolioworks.length > 1 && (
            <SliderPortfolioControl
              portfolioworks={portfolioworks}
              currentPosition={currentPosition}
              nextWork={this.nextWork}
              toggleItem={this.toggleItem}
              startCounter={5}
            />
          )}
        </Flex>
      </Flex>
    );
  }
}

export default SliderPortfolio;
