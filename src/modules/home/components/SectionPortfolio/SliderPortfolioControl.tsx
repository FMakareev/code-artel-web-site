import * as React from 'react';
import styledComponents from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../../../styles/CircularProgressbar.css';

import { Text, Flex, Box } from 'code-artel-ui-lib';
import { ISliderPortfolioControlProps } from './types';

export const Dot = styledComponents(Box)`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: black;
  cursor: pointer;
`;

export interface ISliderPortfolioControlState {
  counter: any;
  setInterval: any;
}

export class SliderPortfolioControl extends React.Component<
  ISliderPortfolioControlProps,
  ISliderPortfolioControlState
> {
  constructor(props: ISliderPortfolioControlProps) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    const { startCounter } = this.props;

    return {
      counter: startCounter,
      setInterval: null,
    };
  }

  componentDidMount(): void {
    this.createSetInterval();
  }

  createSetInterval = () => {
    this.setState(() => ({
      setInterval: setInterval(this.autoCounter, 1000),
    }));
  };

  clearSetInterval = () => {
    const { setInterval } = this.state;

    clearInterval(setInterval);

    this.setState(() => this.initialState);
  };

  restartSetInterval = () => {
    this.clearSetInterval();
    this.createSetInterval();
  };

  autoCounter = () => {
    const { startCounter } = this.props;

    const { counter } = this.state;
    if (counter > 1) {
      this.setState(() => ({
        counter: counter - 1,
      }));
    } else {
      this.props.nextWork();
      this.setState(() => ({
        counter: startCounter,
      }));
    }
  };

  toggleItem = (index: number) => {
    const { toggleItem } = this.props;

    this.restartSetInterval();
    toggleItem(index);
  };

  render() {
    const percentage = 100;

    const { counter } = this.state;
    const { portfolioworks, currentPosition } = this.props;

    return (
      <Flex>
        <Flex width={'168px'} justifyContent={'flex-end'} alignItems={'center'} marginRight={7}>
          {portfolioworks.map((_, index: number) => {
            if (currentPosition === index) {
              return (
                <Flex alignItems={'center'} width={'24px'}>
                  <CircularProgressbar key={index} value={percentage / counter} text={counter} />
                </Flex>
              );
            }
            return (
              <Flex justifyContent={'center'} width={'24px'}>
                <Dot key={index} onClick={() => this.toggleItem(index)} />
              </Flex>
            );
          })}
        </Flex>

        <Text as={'a'} href={'#'} variant={'body1_normal'}>
          Все работы
        </Text>
      </Flex>
    );
  }
}

export default SliderPortfolioControl;
