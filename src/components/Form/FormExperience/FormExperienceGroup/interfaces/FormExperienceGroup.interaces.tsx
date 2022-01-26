/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormExperienceGroupProps {
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
    position?: string;
    company?: string;
    date?: string;
    description?: string;
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

export default FormExperienceGroupProps;
