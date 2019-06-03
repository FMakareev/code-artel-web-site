import * as React from 'react';

/** Components */
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceList from './ServiceList';
// @ts-ignore
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import { ServiceSection, ListServices } from '../../Types';
import parse from 'html-react-parser';

export const SectionServices = ({ sections, services }: ServiceSection) => {
  const filteredSirvices = services.filter(service => service.isMain === false);
  return (
    <Wrapper id={'services'}>
      <Container backgroundColor={'bright_blue'}>
        <Flex px={[6, 13]} py={12} flexDirection={'column'}>
          <Box marginBottom={10}>
            <SectionHeader
              variant={'variant2'}
              title={sections[1].title}
              description={sections[1].description}
              width={'70%'}
            />
          </Box>

          <Flex justifyContent={'space-between'} flexWrap={['wrap']} marginBottom={11}>
            {filteredSirvices.map((service: ListServices, index: number) => (
              <Box width={['100%', '50%', '33.333%']} key={index}>
                <ServiceList
                  icon={service.icons[0].image.url}
                  title={service.title}
                  arr={[parse(service.description)]}
                />
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
};

export default SectionServices;
