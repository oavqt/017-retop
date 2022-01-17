import { Component, ReactNode } from 'react';
import ButtonRemove from '../../../Utils/Button/ButtonRemove/ButtonRemove';
import Input from '../../../Utils/Input/Input';
import Legend from '../../../Utils/Legend/Legend';
import TextArea from '../../../Utils/TextArea/TextArea';
import FormExperienceGroupStyled from './FormExperienceGroup.styled';
import FormExperienceGroupProps from './interfaces/FormExperienceGroup.interaces';

class FormExperienceGroup extends Component<FormExperienceGroupProps> {
  constructor(props: FormExperienceGroupProps) {
    super(props);
  }

  render(): ReactNode {
    const btnRemoveEvent = this.props.fns?.removeExperienceGroup;

    return (
      <FormExperienceGroupStyled>
        <Legend>{this.props.value?.position}</Legend>
        <Input
          attrs={{
            name: 'position',
            placeholder: 'position',
            type: 'text',
            value: this.props.value?.position
          }}
        />
        <Input
          attrs={{
            name: 'company',
            placeholder: 'company',
            type: 'text',
            value: this.props.value?.company
          }}
        />
        <Input
          attrs={{
            name: 'date',
            placeholder: 'date',
            type: 'text',
            value: this.props.value?.date
          }}
        />
        <TextArea
          attrs={{
            name: 'description',
            placeholder: 'description',
            value: this.props.value?.description
          }}
        />
        <ButtonRemove
          attrs={{
            type: 'button',
            value: 'remove',
            rtlTestID: { btn: this.props.attrs?.rtlTestID?.btn?.experience }
          }}
          event={{ btnRemoveEvent }}
          position={this.props.position}
        >
          delete
        </ButtonRemove>
      </FormExperienceGroupStyled>
    );
  }
}

export default FormExperienceGroup;
