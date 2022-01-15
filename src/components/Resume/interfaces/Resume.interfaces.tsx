import { FormEducationPropsObjectGroup } from '../../Form/FormEducation/interfaces/FormEducation.interfaces';
import { FormExperiencePropsObjectGroup } from '../../Form/FormExperience/interfaces/FormExperience.interfaces';

interface ResumeProps {
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
    experience?: FormExperiencePropsObjectGroup;
    education?: FormEducationPropsObjectGroup;
  };
}

interface ResumeStateProps {
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
    experience?: FormExperiencePropsObjectGroup;
    education?: FormEducationPropsObjectGroup;
  };
}

export { type ResumeStateProps };
export default ResumeProps;
