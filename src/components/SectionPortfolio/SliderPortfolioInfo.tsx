import * as React from 'react';

/** Components */
import {
  Text,
  Box,
  // @ts-ignore
  Button,
} from 'code-artel-ui-lib';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  work: any;
}

export class SliderPortfolioInfo extends React.Component<Props> {
  render() {
    return (
      <Box width={'280px'}>
        <Box marginBottom={5}>
          <SectionHeader
            variant={'portfolioInfo'}
            title={this.props.work.tags}
            description={this.props.work.title}>
            <Text variant={'body1_bold'} color={'black'} margin={'24px 0 0 0'}>
              {this.props.work.description}
            </Text>
          </SectionHeader>
        </Box>

        <Button size={'medium'}>
          <a href={this.props.work.id}> Перейти на сайт проекта</a>
        </Button>
      </Box>
    );
  }
}

export default SliderPortfolioInfo;
