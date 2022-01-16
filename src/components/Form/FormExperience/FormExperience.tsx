import { Component, ReactElement } from 'react';
import FormExperienceStyled from './FormExperience.styled';
import FormExperienceGroup from './FormExperienceGroup/FormExperienceGroup';
import Legend from '../../Utils/Legend/Legend';
import ButtonAdd from '../../Utils/Button/ButtonAdd/ButtonAdd';
import FormExperienceProps from './interfaces/FormExperience.interfaces';

class FormExperience extends Component<FormExperienceProps> {
  constructor(props: FormExperienceProps) {
    super(props);
  }

  render(): ReactElement {
    const formExperienceGroup = this.props.experience?.group?.map(
      (object, index) => {
        return (
          <FormExperienceGroup
            key={index}
            value={{ ...object }}
            position={index}
            fns={{ ...this.props.fns }}
          />
        );
      }
    );

    const btnAddEvent = this.props.fns?.addExperienceGroup;

    return (
      <FormExperienceStyled>
        <Legend>experience</Legend>
        {formExperienceGroup}
        <ButtonAdd
          attrs={{ type: 'button', value: 'add' }}
          event={{ btnAddEvent }}
        >
          add experience
        </ButtonAdd>
      </FormExperienceStyled>
    );
  }
}

export default FormExperience;
