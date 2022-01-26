import { Component, ReactNode } from 'react';
import ButtonExample from '../Utils/Button/ButtonExample/ButtonExample';
import ButtonPrint from '../Utils/Button/ButtonPrint/ButtonPrint';
import ButtonReset from '../Utils/Button/ButtonReset/ButtonReset';
import Section from '../Utils/Section/Section';
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
      <Section
        mobile={{ ...this.props.mobile }}
        styled={{
          height: '100%',
          ['overflow-y']: 'scroll',
          width: '25%'
        }}
        rtlTestID={{ ...this.props.rtlTestID }}
      >
        <FormStyled rtlTestID={{ ...this.props.rtlTestID }}>
          <FormPersonal
            personal={{ ...this.props.values?.personal }}
            fns={{
              updateValuesPersonal: this.props.fns?.updateValuesPersonal,
              updateValuesPersonalPhoto:
                this.props.fns?.updateValuesPersonalPhoto
            }}
            rtlTestID={{ ...this.props.rtlTestID }}
          />
          <FormExperience
            experience={{ ...this.props.values?.experience }}
            fns={{
              updateGroupAddObject: this.props.fns?.updateGroupAddObject,
              updateGroupRemoveObject: this.props.fns?.updateGroupRemoveObject,
              updateValuesGroupObject: this.props.fns?.updateValuesGroupObject
            }}
            rtlTestID={{ ...this.props.rtlTestID }}
          />
          <FormEducation
            education={{ ...this.props.values?.education }}
            fns={{
              updateGroupAddObject: this.props.fns?.updateGroupAddObject,
              updateGroupRemoveObject: this.props.fns?.updateGroupRemoveObject,
              updateValuesGroupObject: this.props.fns?.updateValuesGroupObject
            }}
            rtlTestID={{ ...this.props.rtlTestID }}
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
      </Section>
    );
  }
}

export default Form;
