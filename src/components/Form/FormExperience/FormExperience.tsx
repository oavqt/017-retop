import { Component, ReactElement } from 'react';

import FormExperienceStyled from './FormExperience.styled';
import FormExperienceGroup from './FormExperienceGroup/FormExperienceGroup';
import Legend from '../../Utils/Legend/Legend';
import ButtonAdd from '../../Utils/Button/ButtonAdd/ButtonAdd';

interface formExperienceObject {
  title?: string;
  company?: string;
  date?: string;
  description?: string;
}

interface formExperienceGroup {
  group?: Array<formExperienceObject>;
}

interface formExperience {
  experience?: formExperienceGroup;
  events?: {
    addExperienceGroup?: () => void;
  };
}

class FormExperience extends Component<formExperience> {
  constructor(props: formExperience) {
    super(props);
  }

  render(): ReactElement {
    const formExperienceGroup = this.props.experience?.group?.map(
      (object, index) => {
        return <FormExperienceGroup key={index} {...object} />;
      }
    );

    return (
      <FormExperienceStyled>
        <Legend>experience</Legend>
        {formExperienceGroup}
        <ButtonAdd
          attrs={{ type: 'button', value: 'add' }}
          events={{ ...this.props.events }}
        >
          add
        </ButtonAdd>
      </FormExperienceStyled>
    );
  }
}

export { type formExperienceGroup };
export default FormExperience;
