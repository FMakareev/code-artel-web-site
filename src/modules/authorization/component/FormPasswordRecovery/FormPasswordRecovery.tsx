import * as React from 'react';
// @ts-ignore
import { Box, Flex, Button } from 'code-artel-ui-lib';
import { Form, Field } from 'react-final-form';

import Input from '../Input/Input';

export class FormPasswordRecovery extends React.Component<React.FC<any>> {
  onSubmit = (value: any) => {
    alert('На почту отправлено письмо');
    console.log(value);
  };

  validate = ({ email }: any) => {
    const errors: any = {};

    !email ? (errors.email = 'Обязательно для заполнения') : null;

    return errors;
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid }): any => (
          <form onSubmit={handleSubmit}>
            <Box pb={5}>
              <Field render={Input} type={'text'} name={'email'} placeholder={'Почта'} />
            </Box>

            <Flex justifyContent={'space-around'}>
              <Button variant={'secondary'} type={'submit'} disabled={pristine || invalid}>
                Сменить пароль
              </Button>
            </Flex>
          </form>
        )}
      />
    );
  }
}

export default FormPasswordRecovery;
