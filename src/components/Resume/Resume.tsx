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
      values: {
        experience: {
          group: [...(experienceGroup ?? []), { ...experienceProperties }]
        }
      }
    });
  };

  render(): ReactNode {
    const addEduExp = {
      addExperienceGroup: this.addExperienceGroup
    };

    return (
      <ResumeStyled>
        <Form
          attrs={{ ...this.props.form?.attrs }}
          values={{ ...this.state.values }}
          events={{ ...addEduExp }}
        />
      </ResumeStyled>
    );
  }
}

export default Resume;
