import React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';

export const Container = ({ children }: any) => (
  <Flex flexDirection={'column'} maxWidth={'1120px'} marginBottom={13}>
    {children}
  </Flex>
);

export default Container;
