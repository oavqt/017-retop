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
            attrs={{ ...this.props.attrs }}
            fns={{
              updateGroupRemoveObject: this.props.fns?.updateGroupRemoveObject,
              updateValuesGroupObject: this.props.fns?.updateValuesGroupObject
            }}
            group='experience'
            key={index}
            position={index}
            value={{ ...object }}
          />
        );
      }
    );

    const btnAddEvent = this.props.fns?.updateGroupAddObject;

    return (
      <FormExperienceStyled>
        <Legend>experience</Legend>
        {formExperienceGroup}
        <ButtonAdd
          attrs={{ type: 'button', value: 'add' }}
          event={{ btnAddEvent }}
          group='experience'
        >
          add experience
        </ButtonAdd>
      </FormExperienceStyled>
    );
  }
}

export default FormExperience;
