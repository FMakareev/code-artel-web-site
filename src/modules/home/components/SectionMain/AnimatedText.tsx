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

const AnimatedText = ({ variant, services }: TextAnimated) => {
  const variantChosen = variants[variant];
  if (services.length === 1) {
    return (
      <Text variant={variantChosen.variant} color={variantChosen.color}>
        {services[0]}
      </Text>
    );
  }
  return (
    <TextLoop>
      {services &&
        services.map((item: string, index: number) => (
          <Text key={index} variant={variantChosen.variant} color={variantChosen.color}>
            {item}
          </Text>
        ))}
    </TextLoop>
  );
};

export default AnimatedText;
