import * as React from 'react';

import { Flex, Box } from 'code-artel-ui-lib';
import { PortfolioData } from '../../modules/home/Types';

const SliderPortfolioPreview = (props: PortfolioData) => {
  return (
    <Flex
      width={['100%', '100%', '495px']}
      height={['100%', '100%', '355px']}
      alignSelf={'center'}
      marginBottom={9}
      position={'relative'}>
      <Box marginLeft={[0, 0, -13]}>
        <img
          src={props.imagePreview || '../../assets/images/placeholder.png'}
          alt={props.alt}
          width={'100%'}
          height={'100%'}
        />
      </Box>
    </Flex>
  );
};

export default SliderPortfolioPreview;
