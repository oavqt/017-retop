import { Component, ReactElement } from 'react';

import FieldExperienceStyled from './FieldExperience.styled';
import FieldExperienceGroup from './FieldExperienceGroup/FieldExperienceGroup';
import Legend from '../../elements/Legend/Legend';

class FieldExperience extends Component {
  render(): ReactElement {
    return (
      <FieldExperienceStyled>
        <Legend>Experience</Legend>
        <FieldExperienceGroup />
      </FieldExperienceStyled>
    );
  }
}

export default FieldExperience;
