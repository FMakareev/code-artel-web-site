import React, { Component } from 'react';
import styled from 'styled-components';

/** Components */
import { Flex } from 'code-artel-ui-lib';

const WrapperBase = styled(Flex)`
  position: relative;
  justify-content: center;
  min-height: 720px;
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 80px;
`;

const PinkWrapper = styled(Flex)`
   position: relative;
    justify-content: center;
    min-height: 720px;
    width: 100%;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 80px
  &:before  {
    content: '';
    display: block;
    background-color: #E04C7B';
    position: absolute;
    width: 88.9%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    }
`;

interface Props {
  id: any;
  children: any;
  backgroundImage: any;
  color: any;
}

export class Wrapper extends Component<Props> {
  render() {
    const color = this.props.color;
    return color ? (
      <WrapperBase id={this.props.id} backgroundImage={this.props.backgroundImage}>
        {this.props.children}
      </WrapperBase>
    ) : (
      <PinkWrapper id={this.props.id} backgroundImage={this.props.backgroundImage}>
        {this.props.children}
      </PinkWrapper>
    );
  }
}

export default Wrapper;

// position={'relative'}
// justifyContent={'center'}
// minHeight={'720px'}
// width={'100%'}
// margin={'0 auto'}
// backgroundRepeat={'no-repeat'}
// backgroundSize={'cover'}
// marginBottom={13}
