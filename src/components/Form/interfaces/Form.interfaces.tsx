/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';
import {
  FormEducationPropsObject,
  FormEducationPropsObjectArray,
  FormEducationPropsObjectGroup
} from '../FormEducation/interfaces/FormEducation.interfaces';
import {
  FormExperiencePropsObject,
  FormExperiencePropsObjectArray,
  FormExperiencePropsObjectGroup
} from '../FormExperience/interfaces/FormExperience.interfaces';

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
      about?: string;
    };
    experience?: FormExperiencePropsObjectGroup;
    education?: FormEducationPropsObjectGroup;
  };
  fns?: {
    updateGroupAddObject?: (nameOfGroup: string) => void;
    updateGroupRemoveObject?: (nameOfGroup: string, position: number) => void;

    updateValuesPersonal?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => void;
    updateValuesGroupObject?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
      nameOfGroup: string,
      position: number
    ) => void;

    updateStateReset?: () => void;
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

type FormExperienceEducationPropsObject = FormExperiencePropsObject &
  FormEducationPropsObject;

interface FormExperienceEducationPropsObjectGroup {
  experience?: FormExperiencePropsObjectGroup;
  education?: FormEducationPropsObjectGroup;
}

type FormExperienceEducationPropsObjectArray = FormExperiencePropsObjectArray &
  FormEducationPropsObjectArray;

export {
  type FormExperienceEducationPropsObjectArray,
  type FormExperienceEducationPropsObjectGroup,
  type FormExperienceEducationPropsObject,
  type FormStyledProps
};
export default FormProps;
