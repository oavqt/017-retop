import { Component, ReactNode } from 'react';

import ButtonExample from '../Utils/Button/ButtonExample/ButtonExample';
import ButtonPrint from '../Utils/Button/ButtonPrint/ButtonPrint';
import ButtonReset from '../Utils/Button/ButtonReset/ButtonReset';
import FormStyled from './Form.styled';
import FormEducation, {
  type formEducationGroup
} from './FormEducation/FormEducation';
import FormExperience, {
  type formExperienceGroup
} from './FormExperience/FormExperience';
import FormPersonal from './FormPersonal/FormPersonal';

interface form {
  attrs?: {
    ['data-testid']?: string;
  };
  values?: {
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
    experience?: formExperienceGroup;
    education?: formEducationGroup;
  };
  events?: {
    addExperienceGroup?: () => void;
  };
}

class Form extends Component<form> {
  constructor(props: form) {
    super(props);
  }

  render(): ReactNode {
    return (
      <FormStyled {...this.props.attrs}>
        <FormPersonal {...this.props.values?.personal} />
        <FormExperience
          experience={{ ...this.props.values?.experience }}
          events={{ ...this.props.events }}
        />
        <FormEducation
          education={{ ...this.props.values?.education }}
          events={{ ...this.props.events }}
        />
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
