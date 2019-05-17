import * as React from 'react';

/** Components */
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceList from './ServiceList';
// @ts-ignore
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import icon_webdevSvg from '../Icons/icon_webdev.svg';
import icon_blockchainSvg from '../Icons/icon_blockchain.svg';
import icon_applicationSvg from '../Icons/icon_application.svg';
import icon_tech_supSvg from '../Icons/icon_tech_sup.svg';
import icon_escortSvg from '../Icons/icon_escort.svg';
import hardwareSvg from '../Icons/icon_hardware.svg';

const services = [
  {
    icon: icon_webdevSvg,
    title: 'Веб-разработка',
    arr: [
      'Корпоративные сайты',
      'Интернет магазины',
      'Сложные веб-сервисы и интеграции',
      'Высоконагруженные проекты',
      'Промосайты',
      'Чат боты',
      'Веб скарпинг',
    ],
  },
  {
    icon: icon_blockchainSvg,
    title: 'Блокчейн',
    arr: [
      'Разработка сервисов с использованием существующих блокчейн платформ',
      'Внедрение блокчейна в существущие сервисы',
    ],
  },
  {
    icon: icon_applicationSvg,
    title: 'Разработка приложений',
    arr: ['Мобильные приложения для IOS и Android', 'AR визитки'],
  },
  {
    icon: icon_tech_supSvg,
    title: 'Сопровождение сайтов и приложений',
    arr: ['Развитие технологически сложных веб-проектов', 'Сопровождение мобильных приложений'],
  },
  {
    icon: icon_escortSvg,
    title: 'Хостинг и техническая поддержка',
    arr: ['Аренда серверов', 'Настройка и администрирование серверов'],
  },
  {
    icon: hardwareSvg,
    title: 'Разработка аппаратно-программных комплексов',
    arr: ['Интернет вещей'],
  },
];

export const SectionServices = () => (
  <Wrapper id={'services'}>
    <Container backgroundColor={'bright_blue'}>
      <Flex px={13} py={12} flexDirection={'column'}>
        <Box marginBottom={10}>
          <SectionHeader
            variant={'variant2'}
            title={'УСЛУГИ'}
            description={'Комплексные услуги, которые формируют цифровое преобразование'}
            width={'70%'}
          />
        </Box>

        <Flex justifyContent={'space-between'} flexWrap={'wrap'} marginBottom={11}>
          {services.map((service, index) => (
            <Box width={'33,3%'} key={index}>
              <ServiceList icon={service.icon} title={service.title} arr={service.arr} />
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
