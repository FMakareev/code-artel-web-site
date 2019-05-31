import * as React from 'react';

/** Components */
import { Flex } from 'code-artel-ui-lib';

export const Container = ({ children, backgroundColor }: any) => (
  <Flex maxWidth={'1120px'} width={'100%'} backgroundColor={backgroundColor}>
    {children}
  </Flex>
);

export default Container;
