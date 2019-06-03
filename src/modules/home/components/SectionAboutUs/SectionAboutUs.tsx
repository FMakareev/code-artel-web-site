import * as React from 'react';
import styledComponents from 'styled-components';

import { Text, Flex, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import BackgroundColorProperty from '../../../../styles/styleProperty/BackgroundColorProperty';
import { AboutUsSection, Section } from '../../Types';
import parse from 'html-react-parser';

// @ts-ignore
const WrapperStyled = styledComponents(Wrapper)`
  position: relative;
  &:before  {
    content: '';
    display: block;
    ${props => BackgroundColorProperty({ ...props, backgroundColor: 'pink' })} 

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

const sliceArray = (array: any[] = [], count: number = 3): [][] => {
  const lengthSubArray: number = array.length / count;

  let newArray: any[] = [];
  let start: number = 0;
  let end: number = lengthSubArray;

  for (let i = 0; i < count; i += 1) {
    newArray = [...newArray, array.slice(start, end)];
    start = end;
    end = start + lengthSubArray;
  }
  return newArray;
};

const Description = (
  <React.Fragment>
    Преобразуем великолепные идеи{' '}
    <Text variant={'h2_bold'} as={'span'} display={'inline !important'} color={'white'}>
      в великолепный
    </Text>{' '}
    <Text variant={'h2_bold'} as={'span'} display={'inline !important'} color={'yellow'}>
      софт
    </Text>
  </React.Fragment>
);

const SectionAboutUs = ({ section, stack }: AboutUsSection) => {
  const stackParser = parse(stack[0].stack);
  console.log(section);
  return (
    <WrapperStyled id={'about'}>
      <Container>
        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
          <Flex py={12} px={6} flexDirection={'column'}>
            <Box marginBottom={6}>
              {section.map((item: Section, index: number) => {
                return (
                  <SectionHeader
                    key={index}
                    variant={'variant2'}
                    title={item.title}
                    description={Description}
                  />
                );
              })}
            </Box>

            {section.map((section: Section, index: number) => {
              return (
                <Text key={index} variant={'body1_normal'} color={'white'} marginBottom={11}>
                  {section.content}
                </Text>
              );
            })}

            <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
              {sliceArray(stackParser, 3).map((column: string[], index: number) => {
                return (
                  <Box width={['50%', 1 / 3, 1 / 3]} key={`column-${index}`} as={'ul'}>
                    {column.map((item: string, index: number) => (
                      <Text variant={'body1_normal'} color={'white'} key={`${index}`}>
                        {item}
                      </Text>
                    ))}
                  </Box>
                );
              })}
            </Flex>
          </Flex>

          <Box width={['100%', '100%', '140%']}>
            <img src={'../../assets/images/aboutUs.png'} width={'100%'} height={'100%'} />
          </Box>
        </Flex>
      </Container>
    </WrapperStyled>
  );
};

export default SectionAboutUs;
