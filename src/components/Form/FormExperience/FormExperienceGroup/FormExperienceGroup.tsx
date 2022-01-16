import { Component, ReactNode } from 'react';
import ButtonRemove from '../../../Utils/Button/ButtonRemove/ButtonRemove';
import Input from '../../../Utils/Input/Input';
import Legend from '../../../Utils/Legend/Legend';
import Textarea from '../../../Utils/Textarea/Textarea';
import FormExperienceGroupStyled from './FormExperienceGroup.styled';

class FormExperienceGroup extends Component {
  render(): ReactNode {
    return (
      <FormExperienceGroupStyled>
        <Legend>position</Legend>
        <Input attrs={{ placeholder: 'position', type: 'text' }} />
        <Input attrs={{ placeholder: 'company', type: 'text' }} />
        <Input attrs={{ placeholder: 'date', type: 'text' }} />
        <Textarea attrs={{ placeholder: 'description' }} />
        <ButtonRemove attrs={{ type: 'button', value: 'remove' }}>
          delete
        </ButtonRemove>
      </FormExperienceGroupStyled>
    );
  }
}

export default FormExperienceGroup;
