import * as React from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';

const ContactInfo = ({ icon, href, text }: any) => (
  <Flex marginBottom={5}>
    <img src={icon} />

    <Text href={href} as={'a'} variant={'body1_normal'} color={'black'} marginLeft={4}>
      {text}
    </Text>
  </Flex>
);

export default ContactInfo;
