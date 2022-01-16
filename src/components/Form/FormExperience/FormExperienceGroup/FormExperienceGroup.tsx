import { Component, ReactNode } from 'react';
import ButtonRemove from '../../../Utils/Button/ButtonRemove/ButtonRemove';
import Input from '../../../Utils/Input/Input';
import Legend from '../../../Utils/Legend/Legend';
import Textarea from '../../../Utils/Textarea/Textarea';
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
            placeholder: 'position',
            type: 'text',
            value: this.props.value?.position
          }}
        />
        <Input
          attrs={{
            placeholder: 'company',
            type: 'text',
            value: this.props.value?.company
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
          attrs={{ type: 'button', value: 'remove' }}
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
