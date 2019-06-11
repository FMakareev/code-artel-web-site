import * as React from 'react';
import { Box, Flex, Text } from 'code-artel-ui-lib';
import reactInputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styledComponents from 'styled-components';

const InputRangeStyled = styledComponents(reactInputRange)`

`;

export const InputRangeCustom: React.FC<any> = props => {
  const { input } = props;

  const splitPrice = (value: number) => {
    const n = value.toString();
    let newNum = n.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    if (newNum === '500 000') {
      newNum = `От ${newNum}`;
      return newNum;
    }
    return newNum;
  };

  return (
    <Box width={'100%'}>
      <Flex>
        <Text variant={'body1_normal'} color={'back'}>
          Ваш бюджет: &nbsp;
        </Text>
        <Text variant={'body1_bold'} color={'yellow'}>
          {splitPrice(input.value)} ₽
        </Text>
      </Flex>
      <InputRangeStyled
        {...input}
        name={'budget'}
        maxValue={500000}
        minValue={50000}
        step={50000}
        classNames={{
          activeTrack: 'input-range__track input-range__track--active',
          disabledInputRange: 'input-range input-range--disabled',
          inputRange: 'input-range',
          labelContainer: 'input-range__label-container',
          maxLabel: 'input-range__label input-range__label--max',
          minLabel: 'input-range__label input-range__label--min',
          slider: 'input-range__slider',
          sliderContainer: 'input-range__slider-container',
          track: 'input-range__track input-range__track--background',
          valueLabel: 'display-none',
        }}
        onChange={value => input.onChange(value)}
      />
    </Box>
  );
};

export default InputRangeCustom;
