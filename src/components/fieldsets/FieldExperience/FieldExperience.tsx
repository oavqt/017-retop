import { Component, ReactElement } from 'react';

import FieldExperienceStyled from './FieldExperience.styled';
import FieldExperienceGroup from './FieldExperienceGroup/FieldExperienceGroup';
import Legend from '../../elements/Legend/Legend';
import { ButtonAdd } from '../../elements/Button/Button';

class FieldExperience extends Component {
  render(): ReactElement {
    return (
      <FieldExperienceStyled>
        <Legend>experience</Legend>
        <FieldExperienceGroup />
        <FieldExperienceGroup />
        <FieldExperienceGroup />
        <ButtonAdd attrs={{ type: 'button', value: 'add' }}>add</ButtonAdd>
      </FieldExperienceStyled>
    );
  }
}

export default FieldExperience;
