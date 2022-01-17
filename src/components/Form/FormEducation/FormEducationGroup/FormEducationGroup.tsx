import { Component, ReactNode } from 'react';
import ButtonRemove from '../../../Utils/Button/ButtonRemove/ButtonRemove';
import Input from '../../../Utils/Input/Input';
import Legend from '../../../Utils/Legend/Legend';
import Textarea from '../../../Utils/Textarea/Textarea';
import FormEducationGroupStyled from './FormEducationGroup.styled';
import FormEducationGroupProps from './interfaces/FormEducationGroup.interfaces';

class FormEducationGroup extends Component<FormEducationGroupProps> {
  render(): ReactNode {
    const btnRemoveEvent = this.props.fns?.removeEducationGroup;

    return (
      <FormEducationGroupStyled>
        <Legend>{this.props.value?.university}</Legend>
        <Input
          attrs={{
            placeholder: 'university',
            type: 'text',
            value: this.props.value?.university
          }}
        />
        <Input
          attrs={{
            placeholder: 'degree',
            type: 'text',
            value: this.props.value?.degree
          }}
        />
        <Input
          attrs={{
            placeholder: 'date',
            type: 'text',
            value: this.props.value?.date
          }}
        />
        <Textarea
          attrs={{
            placeholder: 'description',
            value: this.props.value?.description
          }}
        />
        <ButtonRemove
          attrs={{
            type: 'button',
            value: 'remove',
            rtlTestID: { btn: this.props.attrs?.rtlTestID?.btn?.education }
          }}
          event={{ btnRemoveEvent }}
        >
          delete
        </ButtonRemove>
      </FormEducationGroupStyled>
    );
  }
}

export default FormEducationGroup;
