import React, { Component } from 'react';
import TextLoop from 'react-text-loop';

/** Components */
import { Text } from 'code-artel-ui-lib';

const variants: any = {
  yellow: {
    variant: 'h1_bold',
    color: 'yellow',
  },
};

interface Props {
  variant: string;
  messages: any;
}

export class AnimatedText extends Component<Props> {
  render() {
    const variantName: string = this.props.variant;
    const variantChosen = variants[variantName];
    return (
      <TextLoop>
        {this.props.messages.map((item: string, index: any) => (
          <Text key={index} variant={variantChosen.variant} color={variantChosen.color}>
            {item}
          </Text>
        ))}
      </TextLoop>
    );
  }
}

export default AnimatedText;
