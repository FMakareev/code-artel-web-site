import React, { Component } from 'react';
import styled from 'styled-components';

/** Components */
import { Box, Select, Button, Text, Flex, Input as InputDefault } from 'code-artel-ui-lib';
import { Form, Field } from 'react-final-form';
import Input from '../Input/Input';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Dropzone from 'react-dropzone';

const ErrorStyled = styled.span`
  color: red;
  font-size: 12px;
  letter-spacing: 0.6px;
  font-family: 'Raleway', sans-serif;
`;

const FileUpload = styled(Box)`
  margin: 16px 0;
  width: 100%;
  cursor: pointer;
`;

const buttonVariant = ({ invalid, dirty, pristine, submitting }: any) => {
  let variant = 'default';
  if (!pristine) {
    if (submitting && invalid) {
      variant = 'error';
    } else if (dirty && !invalid) {
      variant = 'primary';
    }
  }
  return variant;
};

const required = (value: any) => (value ? undefined : 'Обязательно для заполнения');

class ContactForm extends Component {
  state = {
    message: '',
    price: 100000,
  };

  handleSubmit = (values: any) => {
    this.setState({ message: '' });
    const name = values.name;
    const phone = values.phone;
    const email = values.email;
    const comment = values.comment;
    const file = values.file;
    return fetch('./response.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        comment,
        file,
      }),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ message: 'Форма успешно отправлена :)' });
        console.log(data);
      })
      .catch(err => {
        this.setState({ message: 'Произошла ошибка при отправке формы' });
        console.log(err);
      });
  };

  splitPrice = () => {
    const n = this.state.price.toString();
    const newNum = n.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return newNum;
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {({ handleSubmit, submitting, pristine, invalid, dirty }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Box mb={5}>
                <Field
                  name="name"
                  type="text"
                  label="Имя"
                  placeholder="e.g. John Doe"
                  validate={required}
                  component={Input}
                />
              </Box>
              <Box mb={5}>
                <Field
                  name="email"
                  type="email"
                  validate={required}
                  placeholder="e.g john.doe@mail.com"
                  label="Почта"
                  component={Input}
                />
              </Box>
              <Box mb={5}>
                <Field
                  name="phone"
                  type="tel"
                  validate={required}
                  placeholder="+7 900 000 00 00"
                  label="Телефон"
                  component={Input}
                />
              </Box>

              {/*<Field name='service' component={Select}>*/}
              {/*  <Box mb={5}>*/}
              {/*  <option> Веб-разработка</option>*/}
              {/*  <option> Блокчейн</option>*/}
              {/*  <option> Мобильные приложения</option>*/}
              {/*  <option> Сопровождение</option>*/}
              {/*  <option> Хостинг и техническая поддержка</option>*/}
              {/*  <option> Разработка аппратано-программных комплексов</option>*/}
              {/*  </Box>*/}
              {/*</Field>*/}

              <Box mb={5}>
                <Field
                  name="message"
                  type="text"
                  placeholder="Сообщение"
                  label="Сообщение"
                  component={Input}
                />
              </Box>

              <Field name="price" type="range">
                {({}) => (
                  <Box width={'100%'}>
                    <Flex>
                      <Text variant={'body1_normal'} color={'back'}>
                        {' '}
                        Ваш бюджет: &nbsp;{' '}
                      </Text>
                      <Text variant={'body1_normal'} color={'yellow'}>
                        {this.splitPrice()} ₽
                      </Text>
                    </Flex>
                    <InputRange
                      name={'price'}
                      maxValue={500000}
                      minValue={50000}
                      step={50000}
                      formatLabel={value => `${value}₽`}
                      value={this.state.price}
                      onChange={value => this.setState({ price: value })}
                    />
                  </Box>
                )}
              </Field>

              <Field name="file" type="file">
                {({}) => (
                  <Box my={5}>
                    <Dropzone maxSize={52428800}>
                      {({ getRootProps, getInputProps, acceptedFiles }) => {
                        return (
                          <div className={'container'}>
                            <div {...getRootProps({ className: 'dropzone' })}>
                              <input {...getInputProps()} />
                              <Text variant={'body1_normal'} color={'black'}>
                                <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                  {' '}
                                  Прикрепить файл{' '}
                                </span>
                                (до 50мб)
                              </Text>
                            </div>
                            <div>
                              {' '}
                              {acceptedFiles.map(file => (
                                <Text variant={'body1_normal'} color={'black'} key={file.path}>
                                  {file.path} ({file.size} bytes)
                                </Text>
                              ))}{' '}
                            </div>
                          </div>
                        );
                      }}
                    </Dropzone>
                  </Box>
                )}
              </Field>

              <Box my={5}>
                <Button
                  type={'submit'}
                  variant={buttonVariant({ invalid, dirty, pristine, submitting })}
                  disabled={submitting || pristine || invalid}>
                  Отправить заявку
                </Button>
              </Box>

              <Text vairant={'body1_normal'} color={'black'} width={'100%'} marginBottom={4}>
                {this.state.message}
              </Text>
              <Text variant={'caption'} color={'black'}>
                Нажимая на кнопку «Отправить заявку», вы соглашаетесь на обработку персональных
                данных в соответствии с политикой конфиденциальности.
              </Text>
            </Box>
          </form>
        )}
      </Form>
    );
  }
}

export default ContactForm;
