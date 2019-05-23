import * as React from 'react';
import styledComponents from 'styled-components';

/** Components */
import { Flex, Text, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactInfo from './ContactInfo';
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
   @media(max-width: 992px) {
   &:after {
    width: 100%;
    }
   }
`;

const SectionContacts = () => (
  <WrapperWtyled id={'contacts'}>
    <Container>
      <Flex flexWrap={'wrap'}>
        <Flex flexDirection={'column'} py={7} px={[6, 6, 0]} pr={7} width={['100%', '60%', '50%']}>
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

          <ContactInfo
            icon={email}
            href={'mailto:peter.uspenskii@code-artel.ru'}
            text={'peter.uspenskii@code-artel.ru'}
          />
          <ContactInfo icon={phone} href={'tel:+ 79818544645'} text={'+ 7 981 854 46 45'} />
          <ContactInfo icon={address} href={''} text={'Санкт-Петербург'} />
        </Flex>

        <Flex width={['100%', '100%', '50%']} py={12} px={13}>
          <ContactForm />
        </Flex>
      </Flex>
    </Container>
  </WrapperWtyled>
);

export default SectionContacts;
