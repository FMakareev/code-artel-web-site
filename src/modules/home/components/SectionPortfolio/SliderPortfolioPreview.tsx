import * as React from 'react';

import { Flex, Box } from 'code-artel-ui-lib';
import { PortfolioWork } from '../../Types';

const SliderPortfolioPreview = ({ images }: PortfolioWork) => {
  return (
    <Flex
      width={['100%', '100%', '495px']}
      height={['100%', '100%', '355px']}
      alignSelf={'center'}
      my={9}
      position={'relative'}>
      <Box marginLeft={[0, 0, -13]}>
        {images.map((image: string, index: number) => {
          return (
            <img
              key={index}
              src={image.image.url || '../../assets/images/placeholder.png'}
              alt={image.alt}
              width={'100%'}
              height={'100%'}
            />
          );
        })}
      </Box>
    </Flex>
  );
};

export default SliderPortfolioPreview;
