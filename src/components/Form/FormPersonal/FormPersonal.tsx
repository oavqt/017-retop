import { Component, ReactElement } from 'react';

import Input, { InputFile } from '../../Utils/Input/Input';
import Legend from '../../Utils/Legend/Legend';
import Textarea from '../../Utils/Textarea/Textarea';
import FormPersonalStyled from './FormPersonal.styled';

class FormPersonal extends Component {
  render(): ReactElement {
    return (
      <FormPersonalStyled>
        <Legend>personal information</Legend>
        <Input attrs={{ placeholder: 'first name', type: 'text' }} />
        <Input attrs={{ placeholder: 'last name', type: 'text' }} />
        <Input attrs={{ placeholder: 'title', type: 'text' }} />
        <InputFile
          attrs={{ placeholder: 'photo', type: 'file' }}
          label={{ text: 'add photo...' }}
        />
        <Input attrs={{ placeholder: 'address', type: 'text' }} />
        <Input attrs={{ placeholder: 'phone number', type: 'text' }} />
        <Input attrs={{ placeholder: 'email', type: 'text' }} />
        <Textarea attrs={{ placeholder: 'description' }} />
      </FormPersonalStyled>
    );
  }
}

export default FormPersonal;
