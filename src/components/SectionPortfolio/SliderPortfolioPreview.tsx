import React, { Component } from 'react';

import { Flex } from 'code-artel-ui-lib';

interface Props {
  work: any;
}

export class SliderPortfolioPreview extends Component<Props> {
  render() {
    return (
      <Flex
        width={'560px'}
        height={'354px'}
        backgroundImage={this.props.work.imagePreview}
        alignSelf={'center'}
        marginBottom={9}
      />
    );
  }
}

export default SliderPortfolioPreview;
