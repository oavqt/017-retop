/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

interface FormPersonalProps {
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
  };
}

export default FormPersonalProps;
