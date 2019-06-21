import * as React from 'react';
import { graphql } from 'react-apollo';
import { FORM_ERROR } from 'final-form';

/** Components */
// @ts-ignore
import { Box, Button, Text } from 'code-artel-ui-lib';
import { Form, Field } from 'react-final-form';
import Input from '../Input/Input';
import InputRangeCustom from './InputRangeCustom';

// @ts-ignore
import CreateFeedbackMutationGraphql from '../../graphqls/CreateFeedbackMutation.graphql';
import { IFeedback } from '../../Types';

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

interface SectionContactState {
  message: string;
}

export class ContactForm extends React.Component<any, SectionContactState> {
  state = {
    message: '',
  };

  handleSubmit = (values: IFeedback): any => {
    console.log(values);
    const { mutate } = this.props;
    return mutate({
      variables: values,
    })
      .then((response: any) => {
        console.log(response);
      })
      .catch(({ message }: any) => {
        return { [FORM_ERROR]: message };
      });
  };

  render() {
    return (
      <Form
        // @ts-ignore
        onSubmit={this.handleSubmit}
        initialValues={{
          budget: 100000,
        }}>
        {({ handleSubmit, submitting, pristine, invalid, dirty, submitError }) => {
          // console.log(handleSubmit, submitting, pristine, invalid, dirty, error);
          return (
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

                <Box mb={10}>
                  <Field name="budget" type="range" component={InputRangeCustom} />
                </Box>

                {/*<Box mb={5}>*/}
                {/*<Field name='file' type='file' component={InputDropzoneCustom}/>*/}
                {/*</Box>*/}

                <Box mb={5}>
                  <Button
                    type={'submit'}
                    variant={buttonVariant({ invalid, dirty, pristine, submitting })}
                    // disabled={submitting || pristine || invalid}
                  >
                    Отправить заявку
                  </Button>
                </Box>
                {submitError && (
                  <Text
                    vairant={'body1_normal'}
                    color={'dark_pink'}
                    width={'100%'}
                    marginBottom={4}>
                    {submitError}
                  </Text>
                )}
                <Text variant={'caption'} color={'black'}>
                  Нажимая на кнопку «Отправить заявку», вы соглашаетесь на обработку персональных
                  данных в соответствии с политикой конфиденциальности.
                </Text>
              </Box>
            </form>
          );
        }}
      </Form>
    );
  }
}

export default graphql(CreateFeedbackMutationGraphql, {
  options: {
    errorPolicy: 'all',
  },
})(ContactForm);
