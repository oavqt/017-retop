/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormPersonalProps {
  fns?: {
    updateValuesPersonal?: (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => void;
    updateValuesPersonalPhoto?: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  personal?: {
    first?: string;
    last?: string;
    title?: string;
    photo?: string;
    phone?: string;
    email?: string;
    website?: string;
    github?: string;
    linkedin?: string;
    about?: string;
    skills?: string;
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

export default FormPersonalProps;
