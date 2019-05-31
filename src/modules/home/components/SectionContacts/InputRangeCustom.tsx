import * as React from 'react';
import { Box, Flex, Text } from 'code-artel-ui-lib';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

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
      <InputRange
        {...input}
        name={'budget'}
        maxValue={500000}
        minValue={50000}
        step={50000}
        onChange={value => input.onChange(value)}
      />
    </Box>
  );
};

export default InputRangeCustom;
