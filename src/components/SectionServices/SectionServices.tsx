import React from 'react';

/** Components */
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceList from './ServiceList';
import { Flex, Box, Text, Button } from 'code-artel-ui-lib';
import web from '../Icons/icon_webdev.svg';
import blockchain from '../Icons/icon_blockchain.svg';
import application from '../Icons/icon_application.svg';
import tech_sup from '../Icons/icon_tech_sup.svg';
import escort from '../Icons/icon_escort.svg';
import hardware from '../Icons/icon_hardware.svg';

const webArr = [
  'Корпоративные сайты',
  'Интернет магазины',
  'Сложные веб-сервисы и интеграции',
  'Высоконагруженные проекты',
  'Промосайты',
  'Чат боты',
  'Веб скарпинг',
];
const blockainArr = [
  'Разработка сервисов с использованием существующих блокчейн платформ',
  'Внедрение блокчейна в существущие сервисы',
];
const applicatiionArr = ['Мобильные приложения для IOS и Android', 'AR визитки'];
const tech_supArr = [
  'Развитие технологически сложных веб-проектов',
  'Сопровождение мобильных приложений',
];
const escortArr = ['Аренда серверов', 'Настройка и администрирование серверов'];
const hardwareArr = ['Интернет вещей'];

export const SectionServices = () => (
  <Wrapper id={'services'}>
    <Container backgroundColor={'bright_blue'}>
      <Flex px={13} py={7} flexDirection={'column'}>
        <Box marginBottom={10}>
          <SectionHeader
            variant={'variant2'}
            title={'УСЛУГИ'}
            description={'Комплексные услуги, которые формируют цифровое преобразование'}
            width={'70%'}
          />
        </Box>

        <Flex justifyContent={'space-between'} flexWrap={'wrap'} marginBottom={11}>
          <ServiceList icon={web} title={'Веб-разработка'} arr={webArr} />
          <ServiceList icon={blockchain} title={'Блокчейн'} arr={blockainArr} />
          <ServiceList icon={application} title={'Разработка приложений'} arr={applicatiionArr} />
          <ServiceList
            icon={tech_sup}
            title={'Сопровождение сайтов и приложений'}
            arr={tech_supArr}
          />
          <ServiceList icon={escort} title={'Хостинг и техническая поддержка'} arr={escortArr} />
          <ServiceList
            icon={hardware}
            title={'Разработка аппаратно-программных комплексов'}
            arr={hardwareArr}
          />
        </Flex>

        <Text variant={'subtitle1'} color={'white'} marginBottom={5}>
          {' '}
          Хотите работать с нами над вашим продуктом?{' '}
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
