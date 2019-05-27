import React from 'react';

/** Components */
import { Flex, Text } from 'code-artel-ui-lib';
import { ListServices } from '../../modules/home/Types';

export const ServiceList = (props: ListServices) => (
  <Flex
    flexDirection={'column'}
    width={'90%'}
    alignItems={'flex-start'}
    justifyContent={'flex-start'}
    marginBottom={7}>
    <img src={props.icon} />

    <Text variant={'subtitle2'} color={'white'} py={5}>
      {props.title}
    </Text>

    <ul>
      {props.arr.map((item, index) => (
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
