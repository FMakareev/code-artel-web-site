import * as React from 'react';

import { Flex, Box } from 'code-artel-ui-lib';
import { PortfolioData } from '../../Types';

const SliderPortfolioPreview = ({ images }: PortfolioData) => {
  return (
    <Flex
      width={['100%', '100%', '495px']}
      height={['100%', '100%', '355px']}
      alignSelf={'center'}
      my={9}
      position={'relative'}>
      <Box marginLeft={[0, 0, -13]}>
        <img
          src={images[0].image.url || '../../assets/images/placeholder.png'}
          alt={images[0].alt}
          width={'100%'}
          height={'100%'}
        />
      </Box>
    </Flex>
  );
};

export default SliderPortfolioPreview;
