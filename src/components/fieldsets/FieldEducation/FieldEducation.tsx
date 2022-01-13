import { Component, ReactElement } from 'react';

import FieldEducationStyled from './FieldEducation.styled';
import FieldEducationGroup from './FieldEducationGroup/FieldEducationGroup';
import Legend from '../../elements/Legend/Legend';

class FieldEducation extends Component {
  render(): ReactElement {
    return (
      <FieldEducationStyled>
        <Legend>Education</Legend>
        <FieldEducationGroup />
      </FieldEducationStyled>
    );
  }
}

export default FieldEducation;
