import * as React from 'react';
// @ts-ignore
import { Box, Flex, Button } from 'code-artel-ui-lib';
import { Form, Field } from 'react-final-form';
import faker from 'faker';
import { Redirect } from 'react-router-dom';
import Input from '../Input/Input';

export class FormRegistration extends React.Component {
  state = { redirect: null, error: false };

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
        alert('Вы успешно зарегистрированы');

        setTimeout(() => {
          console.log(23, response);
          this.setState((): any => {
            return {
              redirect: '/login',
            };
          });
          return response;
        }, 3000);
      })
      .catch(err => {
        console.log(1, err);
        this.setState((): any => {
          return { error: true };
        });
      });
  };

  validate = ({ firstName, lastName, email, password, retryPassword }: any) => {
    const errors: any = {};

    !firstName ? (errors.firstName = 'Обязательно для заполнения') : null;
    !lastName ? (errors.lastName = 'Обязательно для заполнения') : null;
    !email ? (errors.email = 'Обязательно для заполнения') : null;
    !password ? (errors.password = 'Обязательно для заполнения') : null;
    !retryPassword ? (errors.retryPassword = 'Обязательно для заполнения') : null;

    password !== retryPassword ? (errors.retryPassword = 'Обязательно для заполнения') : null;

    return errors;
  };

  render() {
    const { redirect, error } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid }): any => (
          <form onSubmit={handleSubmit}>
            <Box pb={5}>
              <Field type={'text'} name={'firstName'} placeholder={'Имя'} render={Input} />
            </Box>

            <Box pb={5}>
              <Field name={'lastName'} type={'text'} placeholder={'Фамилия'} render={Input} />
            </Box>

            <Box pb={5}>
              <Field name={'email'} type={'text'} placeholder={'Почта'} render={Input} />
            </Box>

            <Box pb={5}>
              <Field name={'phone'} type={'text'} placeholder={'Телефон'} render={Input} />
            </Box>

            <Box pb={5}>
              <Field name={'password'} type={'password'} placeholder={'Пароль'} render={Input} />
            </Box>

            <Box pb={5}>
              <Field
                name={'retryPassword'}
                type={'password'}
                placeholder={'Повторите пароль'}
                render={Input}
              />
            </Box>

            <Flex justifyContent={'center'}>
              <Button variant={'secondary'} type={'submit'} disabled={pristine || invalid}>
                Регистрация
              </Button>
            </Flex>

            {error && (
              <Flex alignItems={'center'} color={'tomato'} fontSize={7} p={3}>
                Произошла ошибка при регистрации
              </Flex>
            )}
          </form>
        )}
      />
    );
  }
}

export default FormRegistration;
