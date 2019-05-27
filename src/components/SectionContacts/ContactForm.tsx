import * as React from 'react';

/** Components */
import { Box, Button, Text } from 'code-artel-ui-lib';
import { Form, Field } from 'react-final-form';
import Input from '../Input/Input';
import InputRangeCustom from './InputRangeCustom';
import InputDropzoneCustom from './InputDropzoneCustom';

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

// const setMutator = ([name], state, {changeValue}) => {
//   changeValue(state, name, value => {
//     value && value.toString()}
//     )
// };

class ContactForm extends React.Component {
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

  render() {
    return (
      <Form onSubmit={this.handleSubmit} initialValues={{ budget: 100000 }}>
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

              <Box mb={5}>
                <Field
                  name="message"
                  type="text"
                  placeholder="Сообщение"
                  label="Сообщение"
                  component={Input}
                />
              </Box>

              <Field name="budget" type="range" component={InputRangeCustom} />

              <Field name="file" type="file" component={InputDropzoneCustom} />

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
