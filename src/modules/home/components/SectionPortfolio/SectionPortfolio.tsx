import * as React from 'react';
import styledComponents from 'styled-components';

/** Components */
import {
  Flex,
  // @ts-ignore
  Text,
  Box,
} from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';

import SliderPortfolio from './SliderPortfolio';
import BackgroundColorProperty from '../../../../styles/styleProperty/BackgroundColorProperty';
import { IPortfolioSectionProps } from './types';

const WrapperStyled = styledComponents(Wrapper)`
  position: relative;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 50%;
    display: none;
    ${props => {
      // @ts-ignore
      return BackgroundColorProperty({ ...props, backgroundColor: 'bright_gray' });
    }}
  @media(min-width: 992px) {
    display: block;
   }
`;

export const SectionPortfolio = ({
  portfolioworks,
  title,
  description,
}: IPortfolioSectionProps) => (
  <WrapperStyled id={'portfolio'}>
    <Container>
      <Flex flexDirection={'column'} width={'100%'} py={12} px={6}>
        <Box marginBottom={4} width={['100%', '100%', '50%', '50%']}>
          <SectionHeader variant={'variant3'} title={title} description={description} />
        </Box>
        {portfolioworks && <SliderPortfolio portfolioworks={portfolioworks} />}
      </Flex>
    </Container>
  </WrapperStyled>
);

export default SectionPortfolio;
