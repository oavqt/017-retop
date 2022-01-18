import { Component, ReactNode } from 'react';
import ButtonRemove from '../../../Utils/Button/ButtonRemove/ButtonRemove';
import Input from '../../../Utils/Input/Input';
import Legend from '../../../Utils/Legend/Legend';
import TextArea from '../../../Utils/TextArea/TextArea';
import FormEducationGroupStyled from './FormEducationGroup.styled';
import FormEducationGroupProps from './interfaces/FormEducationGroup.interfaces';

class FormEducationGroup extends Component<FormEducationGroupProps> {
  render(): ReactNode {
    const btnRemoveEvent = this.props.fns?.updateGroupRemoveObject;
    const updateValuesGroupObjectEvent =
      this.props.fns?.updateValuesGroupObject;

    return (
      <FormEducationGroupStyled>
        <Legend>{this.props.value?.university}</Legend>
        <Input
          attrs={{
            name: 'university',
            placeholder: 'university',
            type: 'text',
            value: this.props.value?.university
          }}
          event={{ updateValuesGroupObjectEvent }}
          group={this.props.group}
          position={this.props.position}
        />
        <Input
          attrs={{
            name: 'degree',
            placeholder: 'degree',
            type: 'text',
            value: this.props.value?.degree
          }}
          event={{ updateValuesGroupObjectEvent }}
          group={this.props.group}
          position={this.props.position}
        />
        <Input
          attrs={{
            name: 'date',
            placeholder: 'date',
            type: 'text',
            value: this.props.value?.date
          }}
          event={{ updateValuesGroupObjectEvent }}
          group={this.props.group}
          position={this.props.position}
        />
        <TextArea
          attrs={{
            name: 'description',
            placeholder: 'description',
            value: this.props.value?.description
          }}
          event={{ updateValuesGroupObjectEvent }}
          group={this.props.group}
          position={this.props.position}
        />
        <ButtonRemove
          attrs={{
            type: 'button',
            value: 'remove',
            rtlTestID: { btn: this.props.attrs?.rtlTestID?.btn?.education }
          }}
          event={{ btnRemoveEvent }}
          group={this.props.group}
          position={this.props.position}
        >
          delete
        </ButtonRemove>
      </FormEducationGroupStyled>
    );
  }
}

export default FormEducationGroup;
