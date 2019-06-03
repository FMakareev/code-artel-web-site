import * as React from 'react';

/** Components */
// @ts-ignore
import { Box, Flex, Button } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import AnimatedText from './AnimatedText';
import { MainSection, Section } from '../../Types';

const SectionMain = ({ section, serviceList }: MainSection) => {
  const filteredServices = serviceList
    .filter(service => service.isMain === true)
    .map(service => service.title);
  return (
    <Wrapper py={'228px'} id={'main'} backgroundImage={'url(../../assets/images/bg.png)'}>
      <Container>
        <Flex
          height={'100%'}
          flexDirection={'column'}
          justifyContent={'center'}
          paddingLeft={[6, 13]}>
          <Box marginBottom={10}>
            {section.map((item: Section, index: number) => {
              return (
                <SectionHeader
                  key={index}
                  variant={'main'}
                  title={item.title}
                  description={item.description}>
                  <AnimatedText variant={'yellow'} serviceList={filteredServices} />
                </SectionHeader>
              );
            })}
          </Box>

          <Button
            size={'medium'}
            as={'a'}
            href={'#contacts'}
            display={'inline-block'}
            maxWidth={['280px', '380px']}
            textAlign={'center'}>
            Получить бесплатную консультацию
          </Button>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default SectionMain;
