import { ChangeEvent, Component, ReactNode } from 'react';
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
          about: ''
        },
        experience: {
          group: [
            {
              position: 'test',
              company: 'test',
              date: 'test',
              description: 'test'
            }
          ]
        },
        education: {
          group: [
            {
              degree: 'test',
              university: 'test',
              date: 'test',
              description: 'test'
            }
          ]
        }
      }
    };
  }

  updateInptValuesPersonal = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        personal: {
          ...this.state.values?.personal,
          [event.target.name]: event.target.value
        }
      }
    });
  };

  updateTextValuesPersonal = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        personal: {
          ...this.state.values?.personal,
          [event.target.name]: event.target.value
        }
      }
    });
  };

  addExperienceGroup = (): void => {
    const experienceProperties = {
      position: '',
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

  removeExperienceGroup = (position: number): void => {
    const experienceGroup = this.state.values?.experience?.group?.slice();

    experienceGroup?.splice(position, 1);

    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        experience: {
          group: [...(experienceGroup ?? [])]
        }
      }
    });
  };

  removeEducationGroup = (position: number): void => {
    const educationGroup = this.state.values?.education?.group?.slice();

    educationGroup?.splice(position, 1);

    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        education: {
          group: [...(educationGroup ?? [])]
        }
      }
    });
  };

  render(): ReactNode {
    const addEduExp = {
      addExperienceGroup: this.addExperienceGroup,
      addEducationGroup: this.addEducationGroup
    };

    const removeEduExp = {
      removeExperienceGroup: this.removeExperienceGroup,
      removeEducationGroup: this.removeEducationGroup
    };

    const updateValuesPerEduExp = {
      updateInptValuesPersonal: this.updateInptValuesPersonal,
      updateTextValuesPersonal: this.updateTextValuesPersonal
    };

    return (
      <ResumeStyled>
        <Form
          attrs={{ ...this.props.form?.attrs }}
          values={{ ...this.state.values }}
          fns={{ ...addEduExp, ...removeEduExp, ...updateValuesPerEduExp }}
        />
      </ResumeStyled>
    );
  }
}

export default Resume;
