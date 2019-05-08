import React, { Component } from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';

const variants = {
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
};

interface Props {
  variant: any;
  title: string;
  description: string;
  children: any;
}

export class SectionHeader extends Component<Props> {
  render() {
    const variantName: string = this.props.variant;
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
