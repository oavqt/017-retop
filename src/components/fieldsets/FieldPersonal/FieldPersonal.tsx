import { Component, ReactElement } from 'react';

import Input, { InputFile } from '../../elements/Input/Input';
import Legend from '../../elements/Legend/Legend';
import Textarea from '../../elements/Textarea/Textarea';
import FieldPersonalStyled from './FieldPersonal.styled';

class FieldPersonal extends Component {
  render(): ReactElement {
    return (
      <FieldPersonalStyled>
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
      </FieldPersonalStyled>
    );
  }
}

export default FieldPersonal;
