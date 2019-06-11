import * as React from 'react';

/** Components */
import { Flex, Box, Text } from 'code-artel-ui-lib';
import { IContact } from './types';
import Image from '../../../../components/Image/Image';

export const ContactItem: React.FC<IContact> = ({ icon, href, name }: IContact) => (
  <Flex marginBottom={5}>
    <Box maxWidth={'32px'}>
      <Image width={'100%'} {...icon} />
    </Box>
    <Text href={href} as={'a'} variant={'body1_normal'} color={'black'} marginLeft={4}>
      {name}
    </Text>
  </Flex>
);

export default ContactItem;
