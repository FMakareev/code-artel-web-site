import * as React from 'react';
import styledComponents from 'styled-components';

import { Text, Flex, Box } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import BackgroundColorProperty from '../../../../styles/styleProperty/BackgroundColorProperty';
import { AboutUsSection } from '../../Types';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';
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

const stack = [
  'html',
  'css',
  'react.js',
  'typescript',
  'apollo',
  'node.js',
  'python',
  'asyncio',
  'mongodb',
  'postgresql',
  'elasticsearch',
  'graphene',
  'redis',
  'go',
  'docker',
  'react native',
  'java',
  'custom solution',
];

const SectionAboutUs = ({ sections, stacks }: AboutUsSection) => {
  // const stackParser = parse(stacks[0].stack);
  // console.log(stackParser);
  console.log(stacks[0].stack);
  return (
    <WrapperStyled id={'about'}>
      <Container>
        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
          <Flex py={12} px={6} flexDirection={'column'}>
            <Box marginBottom={6}>
              <SectionHeader
                variant={'variant2'}
                title={sections[3].title}
                description={Description}
              />
            </Box>

            <Text variant={'body1_normal'} color={'white'} marginBottom={11}>
              {sections[3].content}
            </Text>

            <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
              {sliceArray(stack, 3).map((column: string[], index: number) => {
                return (
                  <Box width={['50%', 1 / 3, 1 / 3]} key={`column-${index}`} as={'ul'}>
                    {/*{parse('<li> fdgf</li>')}*/}

                    {column.map((item: string, index: number) => (
                      <Text as={'li'} variant={'body1_normal'} color={'white'} key={`${index}`}>
                        + {item}
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
