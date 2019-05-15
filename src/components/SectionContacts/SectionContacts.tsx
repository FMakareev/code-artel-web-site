import React from 'react';
import styledComponents from 'styled-components';
/** Components */
import { Flex, Text, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactForm from './ContactForm';
import email from '../Icons/EmailIcon.svg';
import phone from '../Icons/PhoneIcon.svg';
import address from '../Icons/AddressIcon.svg';
import BackgroundColorProperty from '../../styles/styleProperty/BackgroundColorProperty';

const WrapperWtyled = styledComponents(Wrapper)`
  position: relative;

  &:after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: block;
    width: 50%;
    ${props => BackgroundColorProperty({ ...props, backgroundColor: 'bright_gray' })} 
    
  }
`;

const SectionContacts = () => (
  <WrapperWtyled id={'contacts'} color={true}>
    <Container>
      <Flex flexWrap={'wrap'}>
        <Flex flexDirection={'column'} py={7} pr={7} width={'50%'} paddingRight={7}>
          <Box marginBottom={6}>
            <SectionHeader
              variant={'variant3'}
              title={'КОНТАКТЫ'}
              description={'Мы ищем партнеров, а не клиентов'}
            />
          </Box>

          <Text variant={'body1_normal'} color={'black'} marginBottom={11}>
            Мы всегда находимся в поиске ориентированных на ценность компаний и людей, которые хотят
            оказать большое влияние. Напишите нам, мы хотели бы услышать о вашей компании и как мы
            можем поддержать ваш следующий шаг.
          </Text>

          <Flex marginBottom={4}>
            <img src={email} />
            <Text variant={'body1_normal'} color={'black'} marginLeft={4}>
              <a href={'mailto:peter.uspenskii@code-artel.ru'}>peter.uspenskii@code-artel.ru </a>
            </Text>
          </Flex>

          <Flex marginBottom={4}>
            <img src={phone} />
            <Text variant={'body1_normal'} color={'black'} marginLeft={4}>
              <a href={'tel:+ 79818544645'}> + 7 981 854 46 45 </a>
            </Text>
          </Flex>
          <Flex marginBottom={4}>
            <img src={address} />
            <Text variant={'body1_normal'} color={'black'} marginLeft={5}>
              Санкт-Петербург
            </Text>
          </Flex>
        </Flex>

        <Flex width={'50%'} backgroundColor={'bright_gray'} py={12} px={13}>
          <ContactForm />
        </Flex>
      </Flex>
    </Container>
  </WrapperWtyled>
);

export default SectionContacts;
