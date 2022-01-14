import { Component, ReactNode } from 'react';

import ButtonExample from '../Utils/Button/ButtonExample/ButtonExample';
import ButtonPrint from '../Utils/Button/ButtonPrint/ButtonPrint';
import ButtonReset from '../Utils/Button/ButtonReset/ButtonReset';
import FormStyled from './Form.styled';
import FormEducation from './FormEducation/FormEducation';
import FormExperience from './FormExperience/FormExperience';
import FormPersonal from './FormPersonal/FormPersonal';

interface form {
  attrs?: {
    target?: string;
  };
  form?: {
    personal?: {
      first?: string;
      last?: string;
      title?: string;
      photo?: string;
      address?: string;
      phone?: string;
      email?: string;
      description?: string;
    };
    experience?: {
      title?: string;
      company?: string;
      date?: string;
      description?: string;
    };
    educational?: {
      degree?: string;
      university?: string;
      date?: string;
      description?: string;
    };
  };
}

class Form extends Component<form> {
  render(): ReactNode {
    return (
      <FormStyled>
        <FormPersonal />
        <FormExperience />
        <FormEducation />
        <ButtonReset attrs={{ type: 'button', value: 'reset' }}>
          reset
        </ButtonReset>
        <ButtonExample attrs={{ type: 'button', value: 'example' }}>
          example
        </ButtonExample>
        <ButtonPrint attrs={{ type: 'button', value: 'print' }}>
          print
        </ButtonPrint>
      </FormStyled>
    );
  }
}

export { type form };
export default Form;
