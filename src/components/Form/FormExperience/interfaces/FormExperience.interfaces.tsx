/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormExperienceProps {
  experience?: FormExperiencePropsObjectGroup;
  fns?: {
    updateGroupAddObject?: (nameOfGroup: string) => void;
    updateGroupRemoveObject?: (nameOfGroup: string, position: number) => void;

    updateValuesGroupObject?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
      nameOfGroup: string,
      position: number
    ) => void;
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

interface FormExperiencePropsObject {
  position?: string;
  company?: string;
  date?: string;
  description?: string;
}

type FormExperiencePropsObjectArray = Array<FormExperiencePropsObject>;

interface FormExperiencePropsObjectGroup {
  group?: FormExperiencePropsObjectArray;
}

export {
  type FormExperiencePropsObject,
  type FormExperiencePropsObjectArray,
  type FormExperiencePropsObjectGroup
};
export default FormExperienceProps;
