import { FormEducationPropsObjectGroup } from '../../Form/FormEducation/interfaces/FormEducation.interfaces';
import { FormExperiencePropsObjectGroup } from '../../Form/FormExperience/interfaces/FormExperience.interfaces';

interface ResumeProps {
  mobile?: {
    display?: { preview?: boolean };
    width?: {
      '1200px'?: boolean;
    };
  };
  values?: {
    education?: FormEducationPropsObjectGroup;
    experience?: FormExperiencePropsObjectGroup;
    personal?: {
      first?: string;
      last?: string;
      title?: string;
      photo?: string;
      phone?: string;
      email?: string;
      website?: string;
      github?: string;
      linkedin?: string;
      about?: string;
      skills?: string;
    };
  };
  rtlTestID?: {
    btn?: {
      education?: string;
      experience?: string;
    };
    mobile?: string;
    form?: string;
    preview?: string;
    section?: {
      form?: string;
    };
  };
}

interface ResumeStateProps {
  mobile?: {
    display?: { preview?: boolean };
    width?: {
      '1200px'?: boolean;
    };
  };
  values?: {
    education?: FormEducationPropsObjectGroup;
    experience?: FormExperiencePropsObjectGroup;
    personal?: {
      first?: string;
      last?: string;
      title?: string;
      photo?: string;
      phone?: string;
      email?: string;
      website?: string;
      github?: string;
      linkedin?: string;
      about?: string;
      skills?: string;
    };
  };
}

export { type ResumeStateProps };
export default ResumeProps;
