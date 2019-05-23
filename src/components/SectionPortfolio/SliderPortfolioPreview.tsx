import * as React from 'react';

import { Flex, Box } from 'code-artel-ui-lib';

interface PropsSliderPortfolioPreview {
  work: string;
}

const SliderPortfolioPreview = (props: PropsSliderPortfolioPreview) => (
  <Flex
    width={['100%', '560px']}
    height={'354px'}
    alignSelf={'center'}
    marginBottom={9}
    position={'relative'}>
    <Box marginLeft={[0, -13]}>
      <img src={props.work.imagePreview} width={'100%'} height={'100%'} />
    </Box>
  </Flex>
);

export default SliderPortfolioPreview;
