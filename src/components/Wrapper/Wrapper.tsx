import React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';

export const Wrapper = ({ id, children, backgroundImage }: any) => (
  <Flex
    id={id}
    height={'720px'}
    width={'100%'}
    alignItems={'center'}
    margin={'0 auto'}
    backgroundImage={backgroundImage}
    backgroundRepeat={'no-repeat'}
    backgroundSize={'cover'}>
    {children}
  </Flex>
);

export default Wrapper;
