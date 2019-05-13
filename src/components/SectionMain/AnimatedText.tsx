import React from 'react';
import TextLoop from 'react-text-loop';

/** Components */
import { Text } from 'code-artel-ui-lib';

// const variants = {
//   yellow: {
//     variant: 'h1_bold',
//     color: 'yellow',
//   },
// };

export const AnimatedText = () => {
  // const variantName = {variant};
  // const variantChosen = variants[variantName];
  return (
    <TextLoop>
      <Text variant={'h1_bold'} color={'yellow'}>
        {' '}
        services{' '}
      </Text>
      {/*{messages.map((item, index) => (*/}
      {/*  <Text*/}
      {/*    key={index}*/}
      {/*    variant={variantChosen.variant}*/}
      {/*    color={variantChosen.color}>*/}
      {/*    {item}*/}
      {/*  </Text>*/}
      {/*))}*/}
    </TextLoop>
  );
};

export default AnimatedText;
