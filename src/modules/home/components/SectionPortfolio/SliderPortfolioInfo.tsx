import * as React from 'react';

/** Components */
import {
  Text,
  Box,
  // @ts-ignore
  Button,
} from 'code-artel-ui-lib';
import SectionHeader from '../SectionHeader/SectionHeader';
import { IPortfolioWork } from './types';

export const SliderPortfolioInfo = ({ tags, title, description, id, link }: IPortfolioWork) => (
  <Box width={'280px'} id={id}>
    <Box marginBottom={5}>
      <SectionHeader
        variant={'portfolioInfo'}
        title={tags && tags[0] && tags[0].name}
        description={title}>
        <Text variant={'body1_bold'} color={'black'} margin={'24px 0 0 0'}>
          {description}
        </Text>
      </SectionHeader>
    </Box>

    <Button as={'a'} target={'_blank'} size={'medium'} mb={5} href={link}>
      Перейти на сайт проекта
    </Button>
  </Box>
);

export default SliderPortfolioInfo;
