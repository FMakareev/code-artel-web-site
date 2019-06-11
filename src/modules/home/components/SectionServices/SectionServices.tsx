import * as React from 'react';

/** Components */
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from './ServiceItem';
// @ts-ignore
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import { ServiceSectionProps, IService } from './types';

export const SectionServices: React.FC<ServiceSectionProps> = ({
  title,
  description,
  services,
}: ServiceSectionProps) => (
  <Wrapper id={'services'}>
    <Container backgroundColor={'bright_blue'}>
      <Flex px={[6, 13]} py={12} flexDirection={'column'}>
        <Box width={'70%'} marginBottom={10}>
          <SectionHeader variant={'variant2'} title={title} description={description} />
        </Box>

        <Flex justifyContent={'flex-start'} flexWrap={['wrap']} marginBottom={11}>
          {services &&
            services.map((service: IService, index: number) => (
              <Box width={['100%', '50%', '33.333%']} key={index}>
                <ServiceItem {...service} />
              </Box>
            ))}
        </Flex>

        <Text variant={'subtitle1'} color={'white'} marginBottom={5}>
          Хотите работать с нами над вашим продуктом?
        </Text>

        <Button
          as={'a'}
          href={'#contacts'}
          display={'inline-block'}
          maxWidth={'152px'}
          textAlign={'center'}>
          Связаться
        </Button>
      </Flex>
    </Container>
  </Wrapper>
);

export default SectionServices;
