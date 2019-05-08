import React from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';

export const ServiceList = ({ icon, title, arr }: any) => (
  <Flex
    flexDirection={'column'}
    width={'294px'}
    alignItems={'flex-start'}
    justifyContent={'flex-start'}
    marginBottom={7}>
    <img src={icon} />

    <Text variant={'subtitle2'} color={'white'} py={5}>
      {title}
    </Text>

    <ul>
      {arr.map((item, index) => (
        <li key={index}>
          <Text variant={'body1_normal'} color={'white'}>
            + {item}
          </Text>
        </li>
      ))}
    </ul>
  </Flex>
);

export default ServiceList;
