import { Component, ReactNode } from 'react';
import Form from '../Form/Form';
import ResumeStyled from './Resume.styled';
import ResumeProps, { ResumeStateProps } from './interfaces/Resume.interfaces';

class Resume extends Component<ResumeProps, ResumeStateProps> {
  constructor(props: ResumeProps) {
    super(props);
    this.state = {
      values: {
        personal: {
          first: '',
          last: '',
          title: '',
          photo: '',
          address: '',
          phone: '',
          email: '',
          description: ''
        },
        experience: {
          group: [
            {
              title: '',
              company: '',
              date: '',
              description: ''
            }
          ]
        },
        education: {
          group: [
            {
              degree: '',
              university: '',
              date: '',
              description: ''
            }
          ]
        }
      }
    };
  }

  addExperienceGroup = (): void => {
    const experienceProperties = {
      title: '',
      company: '',
      date: '',
      description: ''
    };

    const experienceGroup = this.state.values?.experience?.group;

    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        experience: {
          group: [...(experienceGroup ?? []), { ...experienceProperties }]
        }
      }
    });
  };

  addEducationGroup = (): void => {
    const educationProperties = {
      degree: '',
      university: '',
      date: '',
      description: ''
    };

    const educationGroup = this.state.values?.education?.group;

    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        education: {
          group: [...(educationGroup ?? []), { ...educationProperties }]
        }
      }
    });
  };

  render(): ReactNode {
    const addEduExp = {
      addExperienceGroup: this.addExperienceGroup,
      addEducationGroup: this.addEducationGroup
    };

    return (
      <ResumeStyled>
        <Form
          attrs={{ ...this.props.form?.attrs }}
          values={{ ...this.state.values }}
          fns={{ ...addEduExp }}
        />
      </ResumeStyled>
    );
  }
}

export default Resume;
