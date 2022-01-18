/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormEducationGroupProps {
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
  fns?: {
    updateGroupRemoveObject?: (nameOfGroup: string, position: number) => void;

    updateValuesGroupObject?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
      nameOfGroup: string,
      position: number
    ) => void;
  };
  group?: string;
  position?: number;
  value?: {
    university?: string;
    degree?: string;
    date?: string;
    description?: string;
  };
}

export default FormEducationGroupProps;
