import * as React from 'react';

import { Flex, Box } from 'code-artel-ui-lib';
import { PortfolioWork } from './SliderPortfolioInfo';

interface Props extends PortfolioWork {
  [prop: string]: any;
}

export const SliderPortfolioPreview: React.FC<Props> = ({ imagePreview, title }) => (
  <Flex
    width={'560px'}
    height={'354px'}
    alignSelf={'center'}
    marginBottom={9}
    backgroundImage={'../../assets/images/placeholder.png'}
    marginLeft={'-370px'}>
    <Box maxWidth={'100%'} height={'auto'} as={'img'} src={imagePreview} alt={title} />
  </Flex>
);

SliderPortfolioPreview.defaultProps = {
  imagePreview: '../../assets/images/placeholder.png',
};

export default SliderPortfolioPreview;
