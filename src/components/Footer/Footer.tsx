import React from 'react';

import { Text, Flex } from 'code-artel-ui-lib';

export const Footer = () => (
  <Flex justifyContent={'center'} width={'100%'} height={8} backgroundColor={'bright_gray'}>
    <Text variant={'body1_normal'} color={'black'}>
      © 2019 Code-Artel
    </Text>
  </Flex>
);

export default Footer;
