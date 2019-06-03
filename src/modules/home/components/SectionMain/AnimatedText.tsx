import * as React from 'react';
// @ts-ignore
import TextLoop from 'react-text-loop';

/** Components */
import { Text } from 'code-artel-ui-lib';
import { TextAnimated } from '../../Types';

const variants: any = {
  yellow: {
    variant: 'h1_bold',
    color: 'yellow',
  },
};

// @ts-ignore
const AnimatedText = ({ variant, serviceList }: TextAnimated) => {
  const variantName: string = variant;
  const variantChosen = variants[variantName];
  return (
    <TextLoop>
      {serviceList &&
        serviceList.map((item: string, index: number) => (
          <Text key={index} variant={variantChosen.variant} color={variantChosen.color}>
            {item}
          </Text>
        ))}
    </TextLoop>
  );
};

export default AnimatedText;
