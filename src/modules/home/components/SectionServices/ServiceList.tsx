import React from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';
import { Service } from '../../Types';

export const ServiceList = ({ icon, title, arr }: Service) => (
  <Flex
    flexDirection={'column'}
    width={'90%'}
    alignItems={'flex-start'}
    justifyContent={'flex-start'}
    marginBottom={7}>
    <img src={icon} />

    <Text variant={'subtitle2'} color={'white'} py={5}>
      {title}
    </Text>

    <ul>
      {arr.map((item, index) => (
        <Text key={index} variant={'body1_normal'} color={'white'}>
          {item}
        </Text>
      ))}
    </ul>
  </Flex>
);

export default ServiceList;
