import React, { Component } from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';
import { HeaderSection } from '../../modules/home/Types/';

const variants: any = {
  main: {
    title: {
      variant: 'body1_bold',
      color: 'white',
    },
    description: {
      variant: 'h1_normal',
      color: 'white',
    },
  },
  variant2: {
    title: {
      variant: 'body1_bold',
      color: 'white',
    },
    description: {
      variant: 'h2_normal',
      color: 'white',
    },
  },
  variant3: {
    title: {
      variant: 'body1_bold',
      color: 'darkest_gray',
    },
    description: {
      variant: 'h3_normal',
      color: 'black',
    },
  },
  portfolioInfo: {
    title: {
      variant: 'body1_bold',
      color: 'yellow',
    },
    description: {
      variant: 'h3_bold',
      color: 'black',
    },
  },
  aboutUs: {
    title: {
      variant: 'body1_bold',
      color: 'white',
    },
    description: {
      variant: 'h3_bold',
      color: 'white',
    },
  },
};

export class SectionHeader extends Component<HeaderSection> {
  render() {
    const variantName = this.props.variant;
    const variantChosen = variants[variantName];
    return (
      <Flex flexDirection={'column'}>
        <Text variant={variantChosen.title.variant} color={variantChosen.title.color}>
          {this.props.title}
        </Text>

        <Text variant={variantChosen.description.variant} color={variantChosen.description.color}>
          {this.props.description}
        </Text>

        {this.props.children}
      </Flex>
    );
  }
}

export default SectionHeader;
