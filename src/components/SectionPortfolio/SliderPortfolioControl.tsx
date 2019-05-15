import React, { Component } from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../../styles/CircularProgressbar.css';

import { Text, Flex, Box } from 'code-artel-ui-lib';

export const Dot = styled(Box)`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: black;
  cursor: pointer;
`;

interface Props {
  toggleItem: any;
  currentPosition: number;
  startCounter: number;
  nextWork: () => void;

  [prop: string]: any;
}

export class SliderPortfolioControl extends Component<Props> {
  constructor(props) {
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
    const { portfolioData, currentPosition } = this.props;

    return (
      <Flex>
        <Flex
          width={'168px'}
          justifyContent={'space-between'}
          alignItems={'center'}
          marginRight={7}>
          {portfolioData.map((item: any, index: number) => {
            if (currentPosition === index) {
              return <CircularProgressbar value={percentage / counter} text={counter} />;
            }
            return <Dot onClick={() => this.toggleItem(index)} />;
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
