import * as React from 'react';
import styledComponents from 'styled-components';

import { Text, Flex, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import BackgroundColorProperty from '../../../../styles/styleProperty/BackgroundColorProperty';
import { IStack, IAboutUsSectionProps } from './types';
import { Create2DimensionalArray } from '../../../../utils/Create2DimensionalArray';

// @ts-ignore
const WrapperStyled = styledComponents(Wrapper)`
  position: relative;
  &:before  {
    content: '';
    display: block;
    ${props => {
      // @ts-ignore
      return BackgroundColorProperty({ ...props, backgroundColor: 'pink' });
    }} 

    position: absolute;
    width: 70%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
   @media(max-width: 992px) {
   &:before {
    width: 100%;
    }
   }
`;

export const SectionAboutUs = ({ title, description, content, stacks }: IAboutUsSectionProps) => {
  return (
    <WrapperStyled id={'about'}>
      <Container>
        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
          <Flex
            py={12}
            px={6}
            width={['100%', '100%', 'calc(100% - 400px)', 'calc(100% - 500px)']}
            flexDirection={'column'}>
            <Box marginBottom={6}>
              <SectionHeader variant={'variant2'} title={title} description={description} />
            </Box>

            <Text variant={'body1_normal'} color={'white'} marginBottom={11}>
              {content}
            </Text>

            <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
              {Create2DimensionalArray<IStack>(stacks, 3).map((column: IStack[], index: number) => (
                <Box width={['50%', 1 / 3, 1 / 3]} key={`column-${index}`} as={'ul'}>
                  {column.map((item: IStack, index: number) => (
                    <Text as={'li'} variant={'body1_normal'} color={'white'} key={`${index}`}>
                      + {item.name}
                    </Text>
                  ))}
                </Box>
              ))}
            </Flex>
          </Flex>

          <Box
            overflow={'hidden'}
            display={['none', 'none', 'block', 'block']}
            width={['100%', '100%', '400px', '500px']}>
            <img src={'/assets/images/aboutUs.jpg'} height={'100%'} />
          </Box>
        </Flex>
      </Container>
    </WrapperStyled>
  );
};

export default SectionAboutUs;
