import { Component, ReactNode } from 'react';
import ButtonExample from '../Utils/Button/ButtonExample/ButtonExample';
import ButtonPrint from '../Utils/Button/ButtonPrint/ButtonPrint';
import ButtonReset from '../Utils/Button/ButtonReset/ButtonReset';
import FormStyled from './Form.styled';
import FormEducation from './FormEducation/FormEducation';
import FormExperience from './FormExperience/FormExperience';
import FormPersonal from './FormPersonal/FormPersonal';
import FormProps from './interfaces/Form.interfaces';

class Form extends Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render(): ReactNode {
    const updateStateResetEvent = this.props.fns?.updateStateReset;
    const updateStateExampleEvent = this.props.fns?.updateStateExample;

    return (
      <FormStyled attrs={{ ...this.props.attrs }}>
        <FormPersonal
          attrs={{ ...this.props.attrs }}
          personal={{ ...this.props.values?.personal }}
          fns={{
            updateValuesPersonal: this.props.fns?.updateValuesPersonal
          }}
        />
        <FormExperience
          attrs={{ ...this.props.attrs }}
          experience={{ ...this.props.values?.experience }}
          fns={{
            updateGroupAddObject: this.props.fns?.updateGroupAddObject,
            updateGroupRemoveObject: this.props.fns?.updateGroupRemoveObject,
            updateValuesGroupObject: this.props.fns?.updateValuesGroupObject
          }}
        />
        <FormEducation
          attrs={{ ...this.props.attrs }}
          education={{ ...this.props.values?.education }}
          fns={{
            updateGroupAddObject: this.props.fns?.updateGroupAddObject,
            updateGroupRemoveObject: this.props.fns?.updateGroupRemoveObject,
            updateValuesGroupObject: this.props.fns?.updateValuesGroupObject
          }}
        />
        <ButtonReset
          attrs={{ type: 'button', value: 'reset' }}
          event={{ updateStateResetEvent }}
        >
          reset
        </ButtonReset>
        <ButtonExample
          attrs={{ type: 'button', value: 'example' }}
          event={{ updateStateExampleEvent }}
        >
          example
        </ButtonExample>
        <ButtonPrint attrs={{ type: 'button', value: 'print' }}>
          print
        </ButtonPrint>
      </FormStyled>
    );
  }
}

export default Form;
