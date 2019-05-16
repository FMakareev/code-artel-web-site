import * as React from 'react';
import { Box, Text } from 'code-artel-ui-lib';
import { InputRange } from 'react-input-range';
import 'react-input-range/lib/css/index.css';
interface Props {
  label: string;
}

export class InputRangeCustom extends React.Component<Props> {
  state = {
    value: 100000,
  };

  render() {
    return (
      <Box width={'100%'}>
        <Text as={'label'} variant={'body1_normal'} color={'black'}>
          {this.props.label}
        </Text>
        <InputRange
          maxValue={200000}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
        )}
      </Box>
    );
  }
}

export default InputRangeCustom;
