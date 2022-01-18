/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormEducationProps {
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
