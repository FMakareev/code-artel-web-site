import * as React from 'react';
import { Box, Text, Input as InputBase } from 'code-artel-ui-lib';

export const Input = (props: any) => {
  const { label, placeholder, meta, input, as = 'input' } = props;
  const isError = meta.touched && meta.error;
  return (
    <Box>
      {label && (
        <Text variant={isError ? 'error' : 'body1'} mb={2}>
          {label}
        </Text>
      )}
      <InputBase
        as={as}
        {...input}
        width={'100%'}
        placeholder={placeholder}
        variant={isError ? 'error' : 'primary'}
        size={'medium'}
      />
      {isError && <Text variant={'error'}>{meta.error}</Text>}
    </Box>
  );
};

export default Input;
