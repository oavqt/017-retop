import { Component, ReactElement } from 'react';

import FormExperienceStyled from './FormExperience.styled';
import FormExperienceGroup from './FormExperienceGroup/FormExperienceGroup';
import Legend from '../../Utils/Legend/Legend';
import ButtonAdd from '../../Utils/Button/ButtonAdd/ButtonAdd';

class FormExperience extends Component {
  render(): ReactElement {
    return (
      <FormExperienceStyled>
        <Legend>experience</Legend>
        <FormExperienceGroup />
        <FormExperienceGroup />
        <FormExperienceGroup />
        <ButtonAdd attrs={{ type: 'button', value: 'add' }}>add</ButtonAdd>
      </FormExperienceStyled>
    );
  }
}

export default FormExperience;
