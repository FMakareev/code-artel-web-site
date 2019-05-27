import * as React from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';
import { InfoContact } from '../../modules/home/Types';

const ContactInfo = (props: InfoContact) => (
  <Flex marginBottom={5}>
    <img src={props.icon} />

    <Text href={props.href} as={'a'} variant={'body1_normal'} color={'black'} marginLeft={4}>
      {props.text}
    </Text>
  </Flex>
);

export default ContactInfo;
