import { Component, ReactElement } from 'react';
import Input from '../../Utils/Input/Input';
import InputFile from '../../Utils/Input/InputFile/InputFile';
import Legend from '../../Utils/Legend/Legend';
import Textarea from '../../Utils/Textarea/Textarea';
import FormPersonalStyled from './FormPersonal.styled';
import FormPersonalProps from './interfaces/FormPersonal.interfaces';

class FormPersonal extends Component<FormPersonalProps> {
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
