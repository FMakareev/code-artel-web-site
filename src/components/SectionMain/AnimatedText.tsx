import * as React from 'react';
import TextLoop from 'react-text-loop';

/** Components */
import { Text } from 'code-artel-ui-lib';

const variants: any = {
  yellow: {
    variant: 'h1_bold',
    color: 'yellow',
  },
};

interface PropsAnimatedText {
  variant: string;
  messages: any;
}

const AnimatedText = (props: PropsAnimatedText) => {
  const variantName: string = props.variant;
  const variantChosen = variants[variantName];
  return (
    <TextLoop>
      {props.messages.map((item: string, index: any) => (
        <Text key={index} variant={variantChosen.variant} color={variantChosen.color}>
          {item}
        </Text>
      ))}
    </TextLoop>
  );
};

export default AnimatedText;
