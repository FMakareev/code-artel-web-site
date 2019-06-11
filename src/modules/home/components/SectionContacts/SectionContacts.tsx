import * as React from 'react';
import styledComponents from 'styled-components';

/** Components */
import { Flex, Text, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactForm from '../ContactForm/ContactForm';
import BackgroundColorProperty from '../../../../styles/styleProperty/BackgroundColorProperty';
import { IContactsSectionProps } from './types';
import StringToReact from '../../../../components/StringToReact/StringToReact';
import ContactList from './ContactList';
import { SocialNetworksList } from './SocialNetworksList';

// @ts-ignore
const WrapperStyled = styledComponents(Wrapper)`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: block;
    ${props => {
      // @ts-ignore
      return BackgroundColorProperty({ ...props, backgroundColor: 'bright_gray' });
    }}
    
    width: 100%;
    height: 660px;
   @media(min-width: 992px) {
    top: 0;
    width: 50%;
    height: auto;
   }
`;

export const SectionContacts = ({
  title,
  description,
  content,
  contacts,
  socialNetworks,
}: IContactsSectionProps) => (
  <WrapperStyled id={'contacts'}>
    <Container>
      <Flex flexWrap={'wrap'}>
        <Flex flexDirection={'column'} py={7} px={6} pr={7} width={['100%', '60%', '50%']}>
          <Box marginBottom={6}>
            <SectionHeader variant={'variant3'} title={title} description={description} />
          </Box>

          <Text variant={'body1_normal'} color={'black'} marginBottom={11}>
            {content && <StringToReact content={content} />}
          </Text>
          <Box mb={7}>
            <ContactList contacts={contacts} />
          </Box>

          <Text mb={5} variant={'h4_normal'}>
            Мы в соц.сетях:
          </Text>

          <SocialNetworksList socialNetworks={socialNetworks} />
        </Flex>

        <Flex width={['100%', '100%', '50%']} py={12} px={[6, 13, 13]}>
          <ContactForm />
        </Flex>
      </Flex>
    </Container>
  </WrapperStyled>
);

export default SectionContacts;
