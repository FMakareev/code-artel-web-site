import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Box, Text } from 'code-artel-ui-lib';

import FormLogin from '../../component/FormLogin/FormLogin';

export const LoginPage: React.FC<any> = () => {
  return (
    <Box py={6} px={5}>
      <Text mb={6}>Вход</Text>
      <FormLogin />
    </Box>
  );
};
export default hot(module)(LoginPage);
