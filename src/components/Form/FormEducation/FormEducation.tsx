import { Component, ReactElement } from 'react';

import FormEducationStyled from './FormEducation.styled';
import FormEducationGroup from './FormEducationGroup/FormEducationGroup';
import Legend from '../../Utils/Legend/Legend';
import ButtonAdd from '../../Utils/Button/ButtonAdd/ButtonAdd';

interface formEducationObject {
  title?: string;
  company?: string;
  date?: string;
  description?: string;
}

interface formEducationGroup {
  group?: Array<formEducationObject>;
}

interface formEducation {
  education?: formEducationGroup;
  events?: {
    addExperienceGroup?: () => void;
  };
}

class FormEducation extends Component<formEducation> {
  constructor(props: formEducation) {
    super(props);
  }
  render(): ReactElement {
    const formEducationGroup = this.props.education?.group?.map(
      (object, index) => {
        return <FormEducationGroup key={index} {...object} />;
      }
    );

    return (
      <FormEducationStyled>
        <Legend>education</Legend>
        {formEducationGroup}
        <ButtonAdd attrs={{ type: 'button', value: 'add' }}>add</ButtonAdd>
      </FormEducationStyled>
    );
  }
}

export { type formEducationGroup };
export default FormEducation;
