import * as React from 'react';

/** Components */
import {
  Text,
  Box,
  // @ts-ignore
  Button,
} from 'code-artel-ui-lib';
import SectionHeader from '../SectionHeader/SectionHeader';
import { PortfolioData } from '../../modules/home/Types';

export class SliderPortfolioInfo extends React.Component<PortfolioData> {
  render() {
    return (
      <Box width={'280px'}>
        <Box marginBottom={5}>
          <SectionHeader
            variant={'portfolioInfo'}
            title={this.props.tags}
            description={this.props.title}>
            <Text variant={'body1_bold'} color={'black'} margin={'24px 0 0 0'}>
              {this.props.description}
            </Text>
          </SectionHeader>
        </Box>

        <Button size={'medium'} mb={5}>
          <a href={this.props.id}> Перейти на сайт проекта</a>
        </Button>
      </Box>
    );
  }
}

export default SliderPortfolioInfo;
