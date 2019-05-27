import * as React from 'react';

/** Components */
// @ts-ignore
import { Box, Flex, Button } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import AnimatedText from './AnimatedText';

const SectionMain = () => (
  <Wrapper py={'228px'} id={'main'} backgroundImage={'url(../../assets/images/bg.png)'}>
    <Container>
      <Flex
        height={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        paddingLeft={[6, 13]}>
        <Box marginBottom={10}>
          <SectionHeader variant={'main'} title={'CODEARTEL'} description={'Мы разрабатываем'}>
            <AnimatedText variant={'yellow'} messages={['сервисы', 'приложения']} />
          </SectionHeader>
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

export default SectionMain;
