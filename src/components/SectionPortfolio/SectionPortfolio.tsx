import * as React from 'react';
import styledComponents from 'styled-components';

/** Components */
import { Flex, Text, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import SliderPortfolio from './SliderPortfolio';
import BackgroundColorProperty from '../../styles/styleProperty/BackgroundColorProperty';
import { PortfolioSection } from '../../modules/home/Types';

// @ts-ignore

const WrapperStyled = styledComponents(Wrapper)`
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

const SectionPortfolio = (props: PortfolioSection) => (
  <WrapperStyled id={'portfolio'}>
    <Container>
      <Flex flexDirection={'column'} width={'100%'} py={12} px={6}>
        <Box marginBottom={4}>
          <SectionHeader variant={'variant3'} title={props.title} description={props.description}>
            <Text variant={'h3_bold'} color={'black'}>
              {props.styledWord}
            </Text>
          </SectionHeader>
        </Box>

        <SliderPortfolio portfolioData={props.portfolioData} />
      </Flex>
    </Container>
  </WrapperStyled>
);

export default SectionPortfolio;
