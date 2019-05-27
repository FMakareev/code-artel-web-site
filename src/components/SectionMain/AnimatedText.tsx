import * as React from 'react';
// @ts-ignore
import TextLoop from 'react-text-loop';

/** Components */
import { Text } from 'code-artel-ui-lib';
import { TextAnimated } from '../../modules/home/Types';

const variants: any = {
  yellow: {
    variant: 'h1_bold',
    color: 'yellow',
  },
};

const AnimatedText = (props: TextAnimated) => {
  const variantName: string = props.variant;
  const variantChosen = variants[variantName];
  return (
    <TextLoop>
      {props.messages.map((item: string, index: number) => (
        <Text key={index} variant={variantChosen.variant} color={variantChosen.color}>
          {item}
        </Text>
      ))}
    </TextLoop>
  );
};

export default AnimatedText;
