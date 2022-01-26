/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormEducationProps {
  education?: FormEducationPropsObjectGroup;
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

interface FormEducationPropsObject {
  university?: string;
  degree?: string;
  date?: string;
  description?: string;
}

type FormEducationPropsObjectArray = Array<FormEducationPropsObject>;

interface FormEducationPropsObjectGroup {
  group?: FormEducationPropsObjectArray;
}

export {
  type FormEducationPropsObject,
  type FormEducationPropsObjectArray,
  type FormEducationPropsObjectGroup
};
export default FormEducationProps;
