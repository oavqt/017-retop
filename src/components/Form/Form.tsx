import { Component, ReactNode } from 'react';
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
      </FormStyled>
    );
  }
}

export { type form };
export default Form;
