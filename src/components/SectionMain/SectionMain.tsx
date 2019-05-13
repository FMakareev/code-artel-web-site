import * as React from 'react';

/** Components */
// @ts-ignore
import { Box, Text, Flex, Button } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import AnimatedText from './AnimatedText';

const SectionMain = () => (
  <Wrapper id={'main'} backgroundImage={'url(../../assets/images/bg.png)'}>
    <Container>
      <Flex height={'100%'} flexDirection={'column'} justifyContent={'center'}>
        <Box marginBottom={10}>
          <SectionHeader variant={'main'} title={'CODEARTEL'} description={'Мы разрабатываем'}>
            <AnimatedText />
          </SectionHeader>
        </Box>

        <Button
          size={'medium'}
          as={'a'}
          href={'#contacts'}
          display={'inline-block'}
          maxWidth={'380px'}
          textAlign={'center'}>
          Получить бесплатную консультацию
        </Button>
      </Flex>
    </Container>
  </Wrapper>
);

export default SectionMain;
