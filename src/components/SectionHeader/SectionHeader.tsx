import React, { Component } from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';

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
      variant: 'body1_normal',
      color: 'white',
    },
    description: {
      variant: 'h2_normal',
      color: 'white',
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
    const variantChoosen = variants[variantName];
    return (
      <Flex flexDirection={'column'} marginBottom={10}>
        <Text variant={variantChoosen.title.variant} color={variantChoosen.title.color}>
          {this.props.title}
        </Text>

        <Text variant={variantChoosen.description.variant} color={variantChoosen.description.color}>
          {this.props.description}
        </Text>

        {this.props.children}
      </Flex>
    );
  }
}

export default SectionHeader;
