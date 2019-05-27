import * as React from 'react';

/** Components */
import {
  Text,
  Box,
  // @ts-ignore
  Button,
} from 'code-artel-ui-lib';
import SectionHeader from '../SectionHeader/SectionHeader';

export interface PortfolioWork {
  tags?: string;
  title?: string;
  description?: string;
  imagePreview?: string;
  id: string;
}

interface Props {
  work: PortfolioWork;
}

export const SliderPortfolioInfo: React.FC<Props> = (props: Props) => (
  <Box width={'280px'}>
    <Box marginBottom={5}>
      <SectionHeader
        variant={'portfolioInfo'}
        title={props.work.tags}
        description={props.work.title}>
        <Text variant={'body1_bold'} color={'black'} margin={'24px 0 0 0'}>
          {props.work.description}
        </Text>
      </SectionHeader>
    </Box>
    <Button as={'a'} href={props.work.id} size={'medium'}>
      Перейти на сайт проекта
    </Button>
  </Box>
);

export default SliderPortfolioInfo;
