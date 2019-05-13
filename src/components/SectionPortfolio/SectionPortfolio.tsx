import React from 'react';

/** Components */
import { Flex, Text, Button } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import PortfolioCase from './PortfolioCase';

const SectionPortfolio = () => (
  <Wrapper id={'portfolio'}>
    <Container>
      <Flex justifyContent={'space-between'}>
        <Flex py={7} flexDirection={'column'}>
          <SectionHeader
            variant={'variant3'}
            title={'НАШИ РАБОТЫ'}
            description={'Мы помогаем нашим клиентам'}>
            <Text variant={'h3_bold'} color={'black'}>
              выиграть
            </Text>
          </SectionHeader>

          <SectionHeader variant={'variant3'} title={'business'} description={'Antifake'}>
            <Text variant={'h3_bold'} color={'black'} margin={'24px 0 0 0'}>
              is a system for supply accounting and tracking lot
            </Text>
          </SectionHeader>
          <Button size={'medium'}>
            <a href={''}>Перейти на сайт проекта</a>
          </Button>
        </Flex>

        <PortfolioCase />
      </Flex>
    </Container>
  </Wrapper>
);

export default SectionPortfolio;
