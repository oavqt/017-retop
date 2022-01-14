import { Component, ReactNode } from 'react';
import Form from '../Form/Form';
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
    experience?: {
      title?: string;
      company?: string;
      date?: string;
      description?: string;
    };
    educational?: {
      degree?: string;
      university?: string;
      date?: string;
      description?: string;
    };
  };
}

class Resume extends Component<resume> {
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
          title: '',
          company: '',
          date: '',
          description: ''
        },
        education: {
          degree: '',
          university: '',
          date: '',
          description: ''
        }
      }
    };
  }
  render(): ReactNode {
    return (
      <ResumeStyled>
        <Form
          attrs={{ ...this.props.form?.attrs }}
          form={{ ...this.props.values }}
        />
      </ResumeStyled>
    );
  }
}

export default Resume;
