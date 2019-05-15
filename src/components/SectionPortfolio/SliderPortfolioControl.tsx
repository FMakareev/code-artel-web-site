import React, { Component } from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../../styles/CircularProgressbar.css';

import { Text, Flex, Box } from 'code-artel-ui-lib';

export const Circle = styled(Box)`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid black;
  color: black;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  font-family: 'Roboto', sans-serif;
  animation: grow 5s;
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.33);
      background-color: black;
    }
  }
`;

export const Dot = styled(Box)`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: black;
`;

interface Props {
  toggleItem: any;
}

export class SliderPortfolioControl extends Component<Props> {
  state = {
    counter: 5,
    senInterval: null,
  };

  render() {
    const percentage = 100;
    return (
      <Flex>
        <Flex
          width={'168px'}
          justifyContent={'space-between'}
          alignItems={'center'}
          marginRight={7}>
          <CircularProgressbar value={percentage} text={'01'} />

          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Flex>

        <Text as={'a'} href={'#'} variant={'body1_normal'}>
          Все работы
        </Text>
      </Flex>
    );
  }
}

export default SliderPortfolioControl;
