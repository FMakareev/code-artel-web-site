import React from 'react';

import { Text, Flex, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
// import aboutUs from '../../assets/images/aboutUs.png';

const stack = [
  'html',
  'css',
  'react.js',
  'typescript',
  'apollo',
  'node.js',
  'python',
  'asyncio',
  'mongodb',
  'postgresql',
  'elasticsearch',
  'graphene',
  'redis',
  'go',
  'docker',
  'react native',
  'java',
  'custom solution',
];

const SectionAboutUs = () => (
  <Wrapper id={'about'} color={true}>
    <Container>
      <Flex>
        <Flex flexDirection={'column'}>
          <Box marginBottom={6}>
            <SectionHeader
              variant={'variant2'}
              title={'О НАС'}
              description={'Преобразуем великолепные идеи'}>
              <Flex>
                <Text variant={'h3_bold'} color={'white'}>
                  {' '}
                  в великолепный{' '}
                </Text>
                <Text variant={'h3_bold'} color={'yellow'}>
                  {' '}
                  &nbsp; софт{' '}
                </Text>
              </Flex>
            </SectionHeader>
          </Box>

          <Text variant={'body1_normal'} color={'white'} marginBottom={11}>
            Члены нашей команды обладают разнообразными компетенциями и навыками, что позволяет нам
            выполнять широкий спектр услуг: от сложных web-сервисов, с применением блокчейн
            технологии до проектирования и производства радиоэлектроники.
          </Text>

          <Flex as={'ul'} flexDirection={'column'} flexWrap={'wrap'} height={'144px'}>
            {stack.map((item, index) => (
              <Text
                as={'li'}
                variant={'body1_normal'}
                color={'white'}
                key={index}
                float={'left'}
                width={'33.3%'}>
                + {item}
              </Text>
            ))}
          </Flex>
        </Flex>

        <img src={'../../assets/images/aboutUs.png'} />
      </Flex>
    </Container>
  </Wrapper>
);

export default SectionAboutUs;
