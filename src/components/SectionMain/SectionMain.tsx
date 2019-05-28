import * as React from 'react';

/** Components */
// @ts-ignore
import { Box, Flex, Button } from 'code-artel-ui-lib';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import AnimatedText from './AnimatedText';
import { MainSection } from '../../modules/home/Types/index';

const SectionMain = (props: MainSection) => (
  <Wrapper py={'228px'} id={'main'} backgroundImage={props.image}>
    <Container>
      <Flex
        height={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        paddingLeft={[6, 13]}>
        <Box marginBottom={10}>
          <SectionHeader variant={'main'} title={props.title} description={props.description}>
            <AnimatedText variant={'yellow'} messages={props.messages} />
          </SectionHeader>
        </Box>

        <Button
          size={'medium'}
          as={'a'}
          href={'#contacts'}
          display={'inline-block'}
          maxWidth={['280px', '380px']}
          textAlign={'center'}>
          {props.buttonText}
        </Button>
      </Flex>
    </Container>
  </Wrapper>
);

export default SectionMain;
