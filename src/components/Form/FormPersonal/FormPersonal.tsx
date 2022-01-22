import { Component, ReactElement } from 'react';
import Input from '../../Utils/Input/Input';
import InputFile from '../../Utils/Input/InputFile/InputFile';
import Legend from '../../Utils/Legend/Legend';
import TextArea from '../../Utils/TextArea/TextArea';
import FormPersonalStyled from './FormPersonal.styled';
import FormPersonalProps from './interfaces/FormPersonal.interfaces';

class FormPersonal extends Component<FormPersonalProps> {
  render(): ReactElement {
    const updateValuesPersonalEvent = this.props.fns?.updateValuesPersonal;
    const updateValuesPersonalPhotoEvent =
      this.props.fns?.updateValuesPersonalPhoto;

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
          event={{ updateValuesPersonalEvent }}
        />
        <Input
          attrs={{
            name: 'last',
            placeholder: 'last name',
            type: 'text',
            value: this.props.personal?.last
          }}
          event={{ updateValuesPersonalEvent }}
        />
        <Input
          attrs={{
            name: 'title',
            placeholder: 'title',
            type: 'text',
            value: this.props.personal?.title
          }}
          event={{ updateValuesPersonalEvent }}
        />
        <InputFile
          attrs={{
            accept: 'image/png, image/jpg',
            name: 'photo',
            placeholder: 'photo',
            type: 'file'
          }}
          label={{ text: 'add photo...' }}
          event={{ updateValuesPersonalPhotoEvent }}
        />
        <Input
          attrs={{
            name: 'phone',
            placeholder: 'phone number',
            type: 'text',
            value: this.props.personal?.phone
          }}
          event={{ updateValuesPersonalEvent }}
        />
        <Input
          attrs={{
            name: 'email',
            placeholder: 'email',
            type: 'text',
            value: this.props.personal?.email
          }}
          event={{ updateValuesPersonalEvent }}
        />{' '}
        <Input
          attrs={{
            name: 'website',
            placeholder: 'website',
            type: 'text',
            value: this.props.personal?.website
          }}
          event={{ updateValuesPersonalEvent }}
        />
        <Input
          attrs={{
            name: 'github',
            placeholder: 'github',
            type: 'text',
            value: this.props.personal?.github
          }}
          event={{ updateValuesPersonalEvent }}
        />
        <Input
          attrs={{
            name: 'linkedin',
            placeholder: 'linkedin',
            type: 'text',
            value: this.props.personal?.linkedin
          }}
          event={{ updateValuesPersonalEvent }}
        />
        <TextArea
          attrs={{
            name: 'about',
            placeholder: 'about',
            value: this.props.personal?.about
          }}
          event={{ updateValuesPersonalEvent }}
        />
      </FormPersonalStyled>
    );
  }
}

export default FormPersonal;
