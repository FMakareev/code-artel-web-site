import * as React from 'react';
import styledComponents from 'styled-components';

/** Components */
import { Flex, Text, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import BackgroundColorProperty from '../../../../styles/styleProperty/BackgroundColorProperty';
import { ContactsSection, InfoContact, Section } from '../../Types';

// @ts-ignore
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

const SectionContacts = ({ section, contactInfo }: ContactsSection) => (
  <WrapperWtyled id={'contacts'}>
    <Container>
      <Flex flexWrap={'wrap'}>
        <Flex flexDirection={'column'} py={7} px={6} pr={7} width={['100%', '60%', '50%']}>
          <Box marginBottom={6}>
            {section.map((section: Section, index: number) => (
              <SectionHeader
                key={index}
                variant={'variant3'}
                title={section.title}
                description={section.description}
              />
            ))}
          </Box>

          {section.map((section: Section, index: number) => {
            return (
              <Text key={index} variant={'body1_normal'} color={'black'} marginBottom={11}>
                {section.content}
              </Text>
            );
          })}

          {contactInfo.map((contact: InfoContact, index: number) => (
            <ContactInfo
              key={index}
              icon={contact.icon.image.url}
              href={contact.href}
              text={contact.contact}
            />
          ))}
        </Flex>

        <Flex width={['100%', '100%', '50%']} py={12} px={[6, 13, 13]}>
          <ContactForm />
        </Flex>
      </Flex>
    </Container>
  </WrapperWtyled>
);

export default SectionContacts;
