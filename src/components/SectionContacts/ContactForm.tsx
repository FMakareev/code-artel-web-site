import React, { Component } from 'react';
import styled from 'styled-components';

/** Components */
import { Box, Input, Select, Button, Text, Flex } from 'code-artel-ui-lib';
import { Form, Field } from 'react-final-form';

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

const inputVariant = ({ meta }: any) => {
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

const required = (value: any) => (value ? undefined : 'Обязательно для заполнения');

// const mustBeNumber = (value:number) => (isNaN(value) ? "Номер должен состоять из цифр" : undefined);
//
// const mailValidate = (min: any) => (value: any) => value.length >= min ? undefined: "Некорректный адрес эл.почты"
//
// const composeValidators = (...validators: any) => (value: any) =>
//     validators.reduce((error: any, validator: (arg0: any) => void) => error || validator(value), undefined);

export class ContactForm extends Component {
  state = {
    message: '',
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

  // handleFileName = () => {
  //     const fileName: HTMLElement | null = document.getElementById("file").files[0].name;
  //     const fileType: HTMLElement | null = document.getElementById("file").files[0].type;
  //     const loadedFile: string = `${fileName} ${fileType}`;
  //     return loadedFile;
  //    }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {({ handleSubmit, submitting, pristine, invalid, dirty }) => (
          <form onSubmit={handleSubmit}>
            <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
              <Field name="name" type="text" validate={required} component={Input}>
                {({ input, meta }) => (
                  <div>
                    <Text as={'label'} variant={'body1_normal'} color={'black'}>
                      {' '}
                      Имя{' '}
                    </Text>
                    <Input
                      {...input}
                      placeholder={'e.g John Doe'}
                      size={'medium'}
                      variant={inputVariant({ meta })}
                    />
                    {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                  </div>
                )}
              </Field>

              <Field name="email" type="email" validate={required} component={Input}>
                {({ input, meta }) => (
                  <div>
                    <Text as={'label'} variant={'body1_normal'} color={'black'}>
                      {' '}
                      Почта{' '}
                    </Text>
                    <Input
                      {...input}
                      placeholder={'e.g john.doe@mail.com'}
                      size={'small'}
                      variant={inputVariant({ meta })}
                    />
                    {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                  </div>
                )}
              </Field>

              <Field name="phone" type="tel" validate={required} component={Input}>
                {({ input, meta }) => (
                  <div>
                    <Text as={'label'} variant={'body1_normal'} color={'black'}>
                      {' '}
                      Телефон{' '}
                    </Text>
                    <Input
                      {...input}
                      placeholder={'+7 900 000 00 00'}
                      size={'small'}
                      variant={inputVariant({ meta })}
                    />
                    {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                  </div>
                )}
              </Field>

              <Field name="service" component={Select}>
                <option> Веб-разработка</option>
                <option> Блокчейн</option>
                <option> Мобильные приложения</option>
                <option> Сопровождение</option>
                <option> Хостинг и техническая поддержка</option>
                <option> Разработка аппратано-программных комплексов</option>
              </Field>

              <Field name="comment" type="text" component={Input}>
                {({ input, meta }) => (
                  <div>
                    <Text as={'label'} variant={'body1_normal'} color={'black'}>
                      {' '}
                      Сообщение{' '}
                    </Text>
                    <Input
                      {...input}
                      placeholder={'Сообщение'}
                      size={'large'}
                      variant={inputVariant({ meta })}
                    />
                    {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                  </div>
                )}
              </Field>

              <Field name="price" type="range" component="input">
                {({ input }) => (
                  <div>
                    <Text variant={'body1_normal'} color={'back'}>
                      {' '}
                      Ваш бюджет:{' '}
                    </Text>
                    <input
                      type={'range'}
                      {...input}
                      min={'10000'}
                      max={'1000000'}
                      value={'20000'}
                      step={'10000'}
                      id={'price'}
                    />
                  </div>
                )}
              </Field>

              <Field name="file" type="file" component={Input}>
                {({ input, meta }) => (
                  <FileUpload>
                    <label>
                      <Input
                        {...input}
                        id={'file'}
                        type={'file'}
                        style={{ display: 'none' }}
                        variant={inputVariant({ meta })}
                      />
                      {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                      <Text variant={'body1_normal'} color={'black'}>
                        <span style={{ textDecoration: 'underline' }}> Прикрепить файл </span> (до
                        50мб)
                      </Text>
                    </label>
                  </FileUpload>
                )}
              </Field>
              <Box marginBottom={'16px'}>
                <Button
                  type="submit"
                  variant={buttonVariant({ invalid, dirty, pristine, submitting })}
                  disabled={submitting || pristine || invalid}>
                  Отправить
                </Button>
              </Box>

              <Text vairant={'body1_normal'} color={'black'} width={'100%'} marginBottom={4}>
                {' '}
                {this.state.message}{' '}
              </Text>
              <Text vairant={'caption'} color={'black'}>
                Нажимая на кнопку «Отправить заявку», вы соглашаетесь на обработку персональных
                данных в соответствии с политикой конфиденциальности.
              </Text>
            </Flex>
          </form>
        )}
      </Form>
    );
  }
}

export default ContactForm;
