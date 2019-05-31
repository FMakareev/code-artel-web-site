import * as React from 'react';
import { Box, Text, Input as InputDefault } from 'code-artel-ui-lib';

const inputVariant = (meta: any = {}) => {
  let variant = 'default';

  if (meta.active) {
    variant = 'primary';
  } else if (meta.dirty && meta.active) {
    variant = 'error';
  } else if (meta.touched && meta.invalid) {
    variant = 'error';
  }
  return variant;
};

export const Input: React.FC<any> = props => {
  console.log(props);

  const { input, meta, label, placeholder, as } = props;

  return (
    <Box width={'100%'}>
      {label && (
        <Text as={'label'} variant={'body1_normal'} color={'black'}>
          {label}
        </Text>
      )}
      <InputDefault
        {...input}
        placeholder={placeholder}
        size={'medium'}
        variant={inputVariant(meta)}
        as={as}
      />
      {meta && meta.error && meta.touched && (
        <Text variant={'error'} px={5}>
          {' '}
          {meta.error}{' '}
        </Text>
      )}
    </Box>
  );
};

export default Input;
