import * as React from 'react';

import { Flex, Box } from 'code-artel-ui-lib';
import { IPortfolioWork } from './types';

export const SliderPortfolioPreview = ({ images }: IPortfolioWork) => {
  return (
    <Flex
      width={['100%', '100%', '495px']}
      height={['100%', '100%', '355px']}
      alignSelf={'center'}
      my={9}
      position={'relative'}>
      <Box marginLeft={[0, 0, -13]}>
        <img
          src={'../../assets/images/placeholder.png'}
          alt={images && images[0] && images[0].alt}
          width={'100%'}
          height={'100%'}
        />
      </Box>
    </Flex>
  );
};
///(images && images[0] && images[0].image) &&
//           images[0].image.name ||
export default SliderPortfolioPreview;
