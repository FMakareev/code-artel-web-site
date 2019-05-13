import * as React from 'react';
// @ts-ignore
import { Box, Flex, Button } from 'code-artel-ui-lib';
import { Form, Field } from 'react-final-form';
import faker from 'faker';

import Input from '../Input/Input';

export class FormLogin extends React.Component<React.FC<any>> {
  state = { error: false };

  onSubmit = (value: any) => {
    const url = faker.internet.url();

    return fetch(`${url}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: value,
    })
      .then(response => {
        setTimeout(() => {
          console.log(23, response);
          return response;
        }, 3000);
        console.log(23, response);
        // return response;
      })
      .catch(err => {
        console.log(1, err);
        this.setState(
          (): any => {
            return { error: true };
          },
        );
      });
  };

  validate = ({ login, password }: any) => {
    const errors: any = {};
    !login ? (errors.login = 'Обязательно для заполнения') : null;
    !password ? (errors.password = 'Обязательно для заполнения') : null;
    return errors;
  };

  render() {
    const { error } = this.state;

    return (
      <Box>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit, pristine, invalid }): any => (
            <form onSubmit={handleSubmit}>
              <Box pb={5}>
                <Field type={'text'} name={'login'} placeholder={'Логин'} render={Input} />
              </Box>

              <Box pb={5}>
                <Field render={Input} name={'password'} type={'password'} placeholder={'Пароль'} />
              </Box>

              <Flex justifyContent={'space-around'}>
                <Button variant={'secondary'} type={'submit'} disabled={pristine || invalid}>
                  Вход
                </Button>
                <Button href={'/registration'} as={'a'}>
                  Регистрация
                </Button>
              </Flex>

              {error && (
                <Flex alignItems={'center'} color={'tomato'} fontSize={7} p={3}>
                  Невеврный логин или пароль
                </Flex>
              )}
            </form>
          )}
        />
      </Box>
    );
  }
}

export default FormLogin;
