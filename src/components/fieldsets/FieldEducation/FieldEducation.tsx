import { Component, ReactElement } from 'react';

import FieldEducationStyled from './FieldEducation.styled';
import FieldEducationGroup from './FieldEducationGroup/FieldEducationGroup';
import Legend from '../../elements/Legend/Legend';
import { ButtonAdd } from '../../elements/Button/Button';

class FieldEducation extends Component {
  render(): ReactElement {
    return (
      <FieldEducationStyled>
        <Legend>education</Legend>
        <FieldEducationGroup />
        <ButtonAdd attrs={{ type: 'button', value: 'add' }}>add</ButtonAdd>
      </FieldEducationStyled>
    );
  }
}

export default FieldEducation;
