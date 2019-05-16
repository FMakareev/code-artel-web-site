import * as React from 'react';

/** Components */
import { Text, Flex } from 'code-artel-ui-lib';

export const Footer = () => (
  <Flex
    justifyContent={'center'}
    alignItems={'center'}
    width={'100%'}
    height={'40px'}
    backgroundColor={'bright_gray'}>
    <Text variant={'body1_normal'} color={'black'}>
      © 2019 Code-Artel
    </Text>
  </Flex>
);

export default Footer;
