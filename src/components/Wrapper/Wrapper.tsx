import React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';

export const Wrapper = ({ id, children, backgroundImage }: any) => (
  <Flex
    id={id}
    justifyContent={'center'}
    minHeight={'720px'}
    width={'100%'}
    margin={'0 auto'}
    backgroundImage={backgroundImage}
    backgroundRepeat={'no-repeat'}
    backgroundSize={'cover'}
    marginBottom={13}>
    {children}
  </Flex>
);

export default Wrapper;
