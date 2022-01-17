/* eslint-disable no-unused-vars */

import { FormEducationPropsObjectGroup } from '../FormEducation/interfaces/FormEducation.interfaces';
import { FormExperiencePropsObjectGroup } from '../FormExperience/interfaces/FormExperience.interfaces';

interface FormProps {
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
  fns?: {
    addExperienceGroup?: () => void;
    addEducationGroup?: () => void;
    removeExperienceGroup?: (position: number) => void;
    removeEducationGroup?: (position: number) => void;
  };
}

interface FormStyledProps {
  attrs?: {
    print?: boolean;
    rtlTestID?: {
      form?: string;
    };
  };
}

export { type FormStyledProps };
export default FormProps;
