import { Component, ReactElement } from 'react';
import Input from '../../Utils/Input/Input';
import InputFile from '../../Utils/Input/InputFile/InputFile';
import Legend from '../../Utils/Legend/Legend';
import TextArea from '../../Utils/TextArea/TextArea';
import FormPersonalStyled from './FormPersonal.styled';
import FormPersonalProps from './interfaces/FormPersonal.interfaces';

class FormPersonal extends Component<FormPersonalProps> {
  render(): ReactElement {
    const inptUpdateValueEvent = this.props.fns?.updateInptValuesPersonal;
    const textUpdateValueEvent = this.props.fns?.updateTextValuesPersonal;

    return (
      <FormPersonalStyled>
        <Legend>personal information</Legend>
        <Input
          attrs={{
            name: 'first',
            placeholder: 'first name',
            type: 'text',
            value: this.props.personal?.first
          }}
          event={{ inptUpdateValueEvent }}
        />
        <Input
          attrs={{
            name: 'last',
            placeholder: 'last name',
            type: 'text',
            value: this.props.personal?.last
          }}
          event={{ inptUpdateValueEvent }}
        />
        <Input
          attrs={{
            name: 'title',
            placeholder: 'title',
            type: 'text',
            value: this.props.personal?.title
          }}
          event={{ inptUpdateValueEvent }}
        />
        <InputFile
          attrs={{
            name: 'photo',
            placeholder: 'photo',
            type: 'file'
          }}
          label={{ text: 'add photo...' }}
          event={{ inptUpdateValueEvent }}
        />
        <Input
          attrs={{
            name: 'address',
            placeholder: 'address',
            type: 'text',
            value: this.props.personal?.address
          }}
          event={{ inptUpdateValueEvent }}
        />
        <Input
          attrs={{
            name: 'phone',
            placeholder: 'phone number',
            type: 'text',
            value: this.props.personal?.phone
          }}
          event={{ inptUpdateValueEvent }}
        />
        <Input
          attrs={{
            name: 'email',
            placeholder: 'email',
            type: 'text',
            value: this.props.personal?.email
          }}
          event={{ inptUpdateValueEvent }}
        />
        <TextArea
          attrs={{
            name: 'about',
            placeholder: 'about',
            value: this.props.personal?.about
          }}
          event={{ textUpdateValueEvent }}
        />
      </FormPersonalStyled>
    );
  }
}

export default FormPersonal;
