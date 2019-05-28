import * as React from 'react';

/** Components */
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceList from './ServiceList';
// @ts-ignore
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import { ServiceSection, ListServices } from '../../modules/home/Types';

export const SectionServices = (props: ServiceSection) => (
  <Wrapper id={'services'}>
    <Container backgroundColor={'bright_blue'}>
      <Flex px={[6, 13]} py={12} flexDirection={'column'}>
        <Box marginBottom={10}>
          <SectionHeader
            variant={'variant2'}
            title={props.title}
            description={props.description}
            width={'70%'}
          />
        </Box>

        <Flex justifyContent={'space-between'} flexWrap={['wrap']} marginBottom={11}>
          {props.serviceList.map((service: ListServices, index: number) => (
            <Box width={['100%', '50%', '33.333%']} key={index}>
              <ServiceList icon={service.icon} title={service.title} arr={service.arr} />
            </Box>
          ))}
        </Flex>

        <Text variant={'subtitle1'} color={'white'} marginBottom={5}>
          {props.callToActionText}
        </Text>

        <Button
          as={'a'}
          href={'#contacts'}
          display={'inline-block'}
          maxWidth={'152px'}
          textAlign={'center'}>
          {props.buttonText}
        </Button>
      </Flex>
    </Container>
  </Wrapper>
);

export default SectionServices;
