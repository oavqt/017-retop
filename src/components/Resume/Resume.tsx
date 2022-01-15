import { Component, ReactNode } from 'react';
import Form from '../Form/Form';
import { type formEducationGroup } from '../Form/FormEducation/FormEducation';
import { type formExperienceGroup } from '../Form/FormExperience/FormExperience';
import ResumeStyled from './Resume.styled';

interface resume {
  form?: {
    attrs?: {
      ['data-testid']?: string;
    };
  };
  preview?: {
    attrs?: {
      ['data-testid']?: string;
    };
  };
  values?: {
    personal?: {
      first?: string;
      last?: string;
      title?: string;
      photo?: string;
      address?: string;
      phone?: string;
      email?: string;
      description?: string;
    };
    experience?: formExperienceGroup;
    education?: formEducationGroup;
  };
}

interface state {
  values?: {
    personal?: {
      first?: string;
      last?: string;
      title?: string;
      photo?: string;
      address?: string;
      phone?: string;
      email?: string;
      description?: string;
    };
    experience?: formExperienceGroup;
    education?: formEducationGroup;
  };
}

class Resume extends Component<resume, state> {
  constructor(props: resume) {
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
          group: []
        },
        education: {
          group: []
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
