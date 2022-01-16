import { Component, ReactNode } from 'react';
import ButtonRemove from '../../../Utils/Button/ButtonRemove/ButtonRemove';
import Input from '../../../Utils/Input/Input';
import Legend from '../../../Utils/Legend/Legend';
import Textarea from '../../../Utils/Textarea/Textarea';
import FormEducationGroupStyled from './FormEducationGroup.styled';

class FormEducationGroup extends Component {
  render(): ReactNode {
    return (
      <FormEducationGroupStyled>
        <Legend>university</Legend>
        <Input attrs={{ placeholder: 'university', type: 'text' }} />
        <Input attrs={{ placeholder: 'degree', type: 'text' }} />
        <Input attrs={{ placeholder: 'date', type: 'text' }} />
        <Textarea attrs={{ placeholder: 'description' }} />
        <ButtonRemove attrs={{ type: 'button', value: 'remove' }}>
          delete
        </ButtonRemove>
      </FormEducationGroupStyled>
    );
  }
}

export default FormEducationGroup;
