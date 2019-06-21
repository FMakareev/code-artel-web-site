import * as React from 'react';

/** Components */
import { Flex, Box, Text } from 'code-artel-ui-lib';
import { IService } from './types';
import StringToReact from '../../../../components/StringToReact/StringToReact';
import Image from '../../../../components/Image/Image';

export const ServiceItem = ({ title, icons, description }: IService) => (
  <Flex
    flexDirection={'column'}
    width={'90%'}
    alignItems={'flex-start'}
    justifyContent={'flex-start'}
    marginBottom={7}>
    <Box maxWidth={'45px'}>
      <Image maxWidth={'100%'} {...(icons && icons[0])} />
    </Box>
    <Text variant={'subtitle2'} color={'white'} py={5}>
      {title}
    </Text>
    <Text variant={'body1_normal'} color={'white'} py={5}>
      {description && <StringToReact content={description} />}
    </Text>
  </Flex>
);

export default ServiceItem;
