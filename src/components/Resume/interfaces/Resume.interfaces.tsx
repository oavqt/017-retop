import { FormEducationPropsObjectGroup } from '../../Form/FormEducation/interfaces/FormEducation.interfaces';
import { FormExperiencePropsObjectGroup } from '../../Form/FormExperience/interfaces/FormExperience.interfaces';

interface ResumeProps {
  form?: {
    attrs?: {
      print?: boolean;
      rtlTestID?: {
        btn?: {
          experience?: string;
          education?: string;
        };
        form?: string;
      };
    };
  };
  preview?: {
    attrs?: {
      print?: boolean;
      rtlTestID?: {
        preview?: string;
      };
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
      about?: string;
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
      about?: string;
    };
    experience?: FormExperiencePropsObjectGroup;
    education?: FormEducationPropsObjectGroup;
  };
}

export { type ResumeStateProps };
export default ResumeProps;
