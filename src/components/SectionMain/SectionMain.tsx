import React from 'react';
import TextLoop from 'react-text-loop';

/** Components */
import { Box, Text, Button } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';

const SectionMain = () => (
  <Wrapper id={'main'} backgroundImage={'url(../../assets/images/bg.png)'}>
    <Container>
      <Box marginLeft={'160px'}>
        <SectionHeader variant={'main'} title={'CODEARTEL'} description={'Мы разрабатываем'}>
          <TextLoop>
            <Text variant={'h1_normal'} color={'yellow'}>
              сервисы
            </Text>
            <Text variant={'h1_normal'} color={'yellow'}>
              софт
            </Text>
          </TextLoop>
        </SectionHeader>

        <Button size={'medium'}>
          <a href={'#contacts'}>Получить бесплатную консультацию</a>
        </Button>
      </Box>
    </Container>
  </Wrapper>
);

export default SectionMain;
