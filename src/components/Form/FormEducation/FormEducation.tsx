import { Component, ReactElement } from 'react';

import FormEducationStyled from './FormEducation.styled';
import FormEducationGroup from './FormEducationGroup/FormEducationGroup';
import Legend from '../../Utils/Legend/Legend';
import { ButtonAdd } from '../../Utils/Button/Button';

class FormEducation extends Component {
  render(): ReactElement {
    return (
      <FormEducationStyled>
        <Legend>education</Legend>
        <FormEducationGroup />
        <ButtonAdd attrs={{ type: 'button', value: 'add' }}>add</ButtonAdd>
      </FormEducationStyled>
    );
  }
}

export default FormEducation;
