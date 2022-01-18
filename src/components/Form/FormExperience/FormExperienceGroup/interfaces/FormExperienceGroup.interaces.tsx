/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormExperienceGroupProps {
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
    position?: string;
    company?: string;
    date?: string;
    description?: string;
  };
}

export default FormExperienceGroupProps;
